const eyeSlash = document.getElementById('eye-slash');
const eye = document.getElementById('eye');

eyeSlash.addEventListener('click', () => {
    eyeSlash.style.display = 'none';
    eye.style.display = 'block';

    inputPassword.type = 'text';
    inputVerifyPassword.type = 'text';
});

eye.addEventListener('click', () => {
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';

    inputPassword.type = 'password';
    inputVerifyPassword.type = 'password';
});