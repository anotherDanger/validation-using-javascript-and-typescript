const btn = (document.getElementById('btn') as HTMLButtonElement).addEventListener('click', () => {
    const username: any = (document.getElementById('username') as HTMLInputElement | null).value;
    if(!username)
    {
        alert('Tidak boleh kosong');
        return;
    }

    //length
    const usernameLength = username.trim().length;
    if(usernameLength < 3)
    {
        alert('Too Short');
    }

    //forbidden
    const invalidChars = /[!@#$%^&*(),.?":{}|<>]/;
    if(invalidChars.test(username.trim())){
        alert('Contains invalid chars');
        return;
    }
})