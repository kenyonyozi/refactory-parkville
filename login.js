var baseUrl = 'http://localhost:3000/';
document.getElementById('signinButton').addEventListener('click', function(click) {
    login(click);
});

function myFunction() {
    var x = document.getElementById('liveToast');

 x.className = 'show';

//  setTimeout(function(){
//      x.className =
//      x.className.replace('show','');  
//  }, 3000);
}



// here the function is telling 
async function login(event) {
    // 
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
// 
    try {
        const response = await fetch(baseUrl + 'users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        })

        const data = await response.json()
        if(data.status == 200){
            // alert(data.message)
            setTimeout(function(){
                x.className =
                x.className.replace('show','');  
            }, 3000);
            window.location = 'clients.html'
        }

    } catch (error) {
        console.log(error)
    }
}
