
document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('tournament-page').classList.remove('hidden');
    } else {
        alert('Please enter email and password.');
    }
});

document.querySelectorAll('.register-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('registration-form').classList.remove('hidden');
    });
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration submitted!');
    document.getElementById('registration-form').classList.add('hidden');
});
