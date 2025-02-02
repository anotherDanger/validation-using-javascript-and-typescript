document.getElementById('btn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username);
    if(!username || !password)
    {
        document.getElementById('usernameFlash').innerText = 'Username is required!';
        document.getElementById('passwordFlasher').innerText = 'Password is required';
        return;
    };

    try{
        const request = new Request('http://localhost:3000/api/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });
        const response = await fetch(request);

        const data = await response.json();

        if(response.ok)
        {
            if(response.status === 201)
            {
                window.location.href = '../index2.html';
            }
        }else if(response.status === 500)
        {
            window.location.href = '../index3.html';
        }
    }catch(error)
    {
        console.log('Error happened', error);
    }
});