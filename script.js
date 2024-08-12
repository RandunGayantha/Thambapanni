document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        const name = form.querySelector('input[placeholder="Name"]').value.trim();
        const email = form.querySelector('input[placeholder="Email"]').value.trim();
        const phone = form.querySelector('input[placeholder="Phone Number"]').value.trim();
        const password = form.querySelector('input[placeholder="Password"]').value;
        const retypePassword = form.querySelector('input[placeholder="Retype Password"]').value;

        if (!name || !email || !phone || !password || !retypePassword) {
            errorMessage.textContent = "All fields are required.";
            event.preventDefault();
        } else if (password !== retypePassword) {
            errorMessage.textContent = "Passwords do not match.";
            event.preventDefault();
        } else {
            errorMessage.textContent = "";
        }
    });
});
