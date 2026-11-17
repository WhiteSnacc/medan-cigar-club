const chatWidget = document.querySelector(".chat-widget");
const chatToggle = document.querySelector("#chat-toggle");
const chatClose = document.querySelector("#chat-close");
const year = document.querySelector("#year");

function setChatOpen(isOpen) {
    chatWidget.classList.toggle("is-closed", !isOpen);
    chatToggle.setAttribute("aria-expanded", String(isOpen));
    chatToggle.setAttribute("aria-label", isOpen ? "Tutup info chat" : "Buka info chat");
}

chatToggle.addEventListener("click", () => {
    setChatOpen(chatWidget.classList.contains("is-closed"));
});

chatClose.addEventListener("click", () => {
    setChatOpen(false);
    chatToggle.focus();
});

year.textContent = new Date().getFullYear();