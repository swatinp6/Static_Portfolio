document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contact-form");
    const formMessage = document.querySelector("#form-message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page refresh

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if (!name || !email || !message) {
            formMessage.textContent = "All fields are required.";
            formMessage.style.color = "red";
            return;
        }

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "black";

        // Optionally, clear form fields after successful submission
        contactForm.reset();
    });
});
