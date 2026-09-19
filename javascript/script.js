const toast = document.getElementById("toast");

let toastTimer;

function showToast(message, type = "") {
    toast.textContent = message;

    toast.classList.remove("contact-toast");

    if (type === "contact") {
        toast.classList.add("contact-toast");
    }

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
        toast.classList.remove("contact-toast");
    }, 2500);
}


const resumeBtn = document.getElementById("resume-btn");

resumeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Resume will be available soon!");
});


const projectsBtn = document.getElementById("projects-btn");

projectsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Projects are coming soon — stay tuned!");
});


const exploreWorkBtn = document.getElementById("explore-work-btn");

exploreWorkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Projects are coming soon — stay tuned!");
});


const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector("button[type='submit']");

    submitButton.disabled = true;
    submitButton.style.opacity = "0.7";
    submitButton.style.cursor = "not-allowed";

    emailjs
        .sendForm(
            "service_yt9zko6",
            "template_h1uyxku",
            contactForm
        )
        .then(() => {
            contactForm.reset();
            showToast("Message sent successfully!", "contact");
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            showToast(
                "Message could not be sent. Please try again.",
                "contact"
            );
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.style.opacity = "";
            submitButton.style.cursor = "";
        });
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        setTimeout(() => {
            navLinks.classList.remove("active");
        }, 200);
    });
});