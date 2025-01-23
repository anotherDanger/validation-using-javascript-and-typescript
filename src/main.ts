const btn = (document.getElementById('btn') as HTMLButtonElement).addEventListener('click', () => {
    const username: any = (document.getElementById('username') as HTMLInputElement | null).value;
    const password: any = (document.getElementById('password') as HTMLInputElement | null).value;
    const flash = document.getElementById('usernameFlash') as HTMLDivElement;
    const passFlash = document.getElementById('passwordFlasher') as HTMLDivElement;
    if(!username)
    {
        flash.innerText = 'Cannot Empty!';
        return;
    }
    
    //forbidden
    const invalidChars = /[!@#$%^&*(),.?":{}|<>]/;
    if(invalidChars.test(username.trim())){
        flash.innerText = 'Cannot contains invalid characters!';
        return;
    }

    //length
    const usernameLength = username.trim().length;
    if(usernameLength < 3)
    {
        flash.innerText = 'Too Short!';
        return;
    }




})