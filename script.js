document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const retypePassword = document.getElementById('retype-password').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!name || !email || !phone || !password || !retypePassword) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (password !== retypePassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    errorMessage.textContent = '';
    alert('Form submitted successfully!');
});
