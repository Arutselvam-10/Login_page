document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageBox = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', (e) => {
        // 1. Prevent the page from refreshing
        e.preventDefault(); 

        // 2. Show the success message box
        messageBox.style.display = 'block';

        // 3. Clear the inputs after "login"
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';

        console.log("Form submitted successfully!");
    });
});