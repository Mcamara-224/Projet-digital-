const messages = document.getElementById("messages");

function addMessage(text, type) {
    const div = document.createElement("div");
    div.classList.add("message");
    
    if(type === "user"){
        div.classList.add("user");
    }

    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value.trim();

    if(!text) return;

    addMessage("Vous : " + text, "user");

    setTimeout(() => {
        let response;

        if(text.toLowerCase().includes("qui t'a créé")) {
            response = "J'ai été créé par Chapeau Noir.";
        } else {
            response = "Message reçu : " + text;
        }

        addMessage(CONFIG.BOT_NAME + " : " + response, "bot");
    }, 500);

    input.value = "";
}

document.getElementById("messageInput").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});
