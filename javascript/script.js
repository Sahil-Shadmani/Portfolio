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


// Resume button
const resumeBtn = document.getElementById("resume-btn");

resumeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Resume will be available soon!");
});


// Projects button
const projectsBtn = document.getElementById("projects-btn");

projectsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Projects are coming soon — stay tuned!");
});


// Explore My Work button
const exploreWorkBtn = document.getElementById("explore-work-btn");

exploreWorkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Projects are coming soon — stay tuned!");
});


// Contact form - EmailJS
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