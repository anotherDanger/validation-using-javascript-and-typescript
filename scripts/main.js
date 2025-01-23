const btn = document.getElementById('btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Tidak boleh kosong');
        return;
    }
    //length
    const usernameLength = username.trim().length;
    if (usernameLength < 3) {
        alert('Too Short');
    }
    //forbidden
    const invalidChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (invalidChars.test(username.trim())) {
        alert('Contains invalid chars');
        return;
    }
});
