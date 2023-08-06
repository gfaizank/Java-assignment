const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');
const loginButton = document.getElementById('loginButton');
const apiUrl = 'http://localhost:3000/api/sunbase/portal/api/assignment_auth.jsp';

loginButton.addEventListener('click', async () => {
    const login_id = document.getElementById('login_id').value;
    const password = document.getElementById('password').value;

    const loginData = {
        login_id: login_id,
        password: password
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token; // Assuming the token key is 'token' in the response

            // Display success message
            messageDiv.textContent = "Login Successful. Bearer token: " + token;
        } else {
            const errorData = await response.json();
            // Display error message
            messageDiv.textContent = "Authentication failed. Error: " + errorData.message;
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

