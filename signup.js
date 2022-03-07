var baseUrl = 'http://localhost:3000';

document.getElementById('submit').addEventListener('click', function(click) {
    newSignup(click);
});

async function newSignup(event) {
    event.preventDefault();
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;

    try {
        console.log(email)
        const response = await fetch(baseUrl + '/users/Signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "password": password,
                "confirmpassword": confirmpassword
            })
        })
        const data = await response.json()
        console.log(data)
        if (data.status == 201) {
            // alert("successful sign up")
            setTimeout(myFunction(), 9000);
            window.location = 'clients.html'
        }

    } catch (error) {
        console.log(error)
    }

}