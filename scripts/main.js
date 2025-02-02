const btn = document.getElementById('btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const flash = document.getElementById('usernameFlash');
    const passFlash = document.getElementById('passwordFlasher');
    if (!username) {
        flash.innerText = 'Cannot Empty!';
        return;
    }
    //forbidden
    const invalidChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (invalidChars.test(username.trim())) {
        flash.innerText = 'Cannot contains invalid characters!';
        return;
    }
    //length
    const usernameLength = username.trim().length;
    if (usernameLength < 3) {
        flash.innerText = 'Too Short!';
        return;
    }
    //password length
    if (password.length < 6) {
        passFlash.innerText = 'Too short';
        return;
    }
    ;
    //at least one number
    if (!/\d/.test(password)) {
        passFlash.innerText = 'Password must contain at least one number!';
        return;
    }
    //at least uppercase letter
    if (!/[A-Z]/.test(password)) {
        passFlash.innerText = 'Password must contain at least one uppercase letter!';
        return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        passFlash.innerText = 'Password must contain at least one special character!';
        return;
    }
    const placeholder = document.getElementById('usernamePlaceholder');
    placeholder.remove();
    flash.innerText = 'Valid Username!';
    flash.classList.remove('text-danger');
    flash.classList.add('text-light');
    passFlash.innerText = 'Valid Password!';
    passFlash.classList.remove('text-danger');
    passFlash.classList.add('text-light');
});
