document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const phone = form.querySelector("input[type='tel']").value.trim();
        const password = form.querySelector("input[placeholder='Password']").value.trim();
        const retypePassword = form.querySelector("input[placeholder='Retype Password']").value.trim();
        const errorMessage = document.getElementById("error-message");

        errorMessage.textContent = "";

        if (name === "" || email === "" || phone === "" || password === "" || retypePassword === "") {
            errorMessage.textContent = "All fields are required.";
            alert("Please fill out all fields.");
            event.preventDefault();
            return;
        }

        if (password !== retypePassword) {
            errorMessage.textContent = "Passwords do not match.";
            alert("Passwords do not match.");
            event.preventDefault();
        }
    });
});
