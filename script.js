const siteNav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const year = document.querySelector("#year");
const whatsappWidget = document.querySelector(".whatsapp-widget");
const whatsappToggle = document.querySelector("#whatsapp-toggle");
const whatsappClose = document.querySelector("#whatsapp-close");

if (year) {
    year.textContent = String(new Date().getFullYear());
}

if (siteNav && menuToggle) {
    siteNav.dataset.menuEnhanced = "true";

    const setMenuOpen = (isOpen) => {
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
        siteNav.querySelector(".nav-links")?.classList.toggle("is-open", isOpen);
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });
}

if (whatsappWidget && whatsappToggle && whatsappClose) {
    const setChatOpen = (isOpen) => {
        whatsappWidget.classList.toggle("is-closed", !isOpen);
        whatsappToggle.setAttribute("aria-expanded", String(isOpen));
        whatsappToggle.setAttribute(
            "aria-label",
            isOpen ? "Close WhatsApp chat message" : "Open WhatsApp private chat"
        );
    };

    whatsappToggle.addEventListener("click", () => {
        const isOpen = whatsappToggle.getAttribute("aria-expanded") === "true";
        setChatOpen(!isOpen);
    });

    whatsappClose.addEventListener("click", () => {
        setChatOpen(false);
        whatsappToggle.focus();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && whatsappToggle.getAttribute("aria-expanded") === "true") {
            setChatOpen(false);
            whatsappToggle.focus();
        }
    });
}
