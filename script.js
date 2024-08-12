document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Registration successful!");
        // Optionally, you can submit the form here if everything is valid
        // e.target.submit(); // Uncomment this line if you want to submit the form
    }
});
