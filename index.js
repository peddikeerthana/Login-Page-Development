function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");
    var loginLink = document.getElementById("loginLink");
    var registerLink = document.getElementById("registerLink");

    // Toggle visibility of forms and links
    loginForm.classList.toggle("hidden");
    registerForm.classList.toggle("hidden");
    loginLink.classList.toggle("hidden");
    registerLink.classList.toggle("hidden");
}

function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Send login data to backend
    // Example using fetch API
    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        console.log('Login successful:', data);
        // Redirect or show success message
    })
    .catch(error => {
        console.error('Login error:', error);
        // Show error message
    });
}

function register() {
    var username = document.getElementById("registerUsername").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    // Send registration data to backend
    // Example using fetch API
    fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        return response.json();
    })
    .then(data => {
        console.log('Registration successful:', data);
        // Redirect or show success message
    })
    .catch(error => {
        console.error('Registration error:', error);
        // Show error message
    });
}
