document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginSection = document.getElementById('login-section');
    const imageDisplay = document.getElementById('image-display');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page refresh

        // 1. Hide the login form area
        loginSection.style.display = 'none';

        // 2. Show the image area
        imageDisplay.style.display = 'block';

        console.log("Login sequence complete. Showing image.");
    });
});