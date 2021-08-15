document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if (userEmail == 'abc@gmail.com' && userPassword == '1234') {
        window.location.href = 'banking.html';
    }
});
