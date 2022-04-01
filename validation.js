const fastFocus = () =>{
    // focus means that you put the cusor on the field you want to focus on
    let userid = document.register.firstname.focus();
    return true
};
// globle variables for password
// const passid = document.getElementById('password')
// const passId = document.getElementById('confirmpassword')
// errors
const firstname_error = document.getElementById('fName');
const lastname_error = document.getElementById('lName');
const email_error = document.getElementById('email2');
const password_error = document.getElementById('pwd');
const confirmpassword_error = document.getElementById('pwdd');

// validating the firstname
const userN = (max,min) =>{
    let userN = document.register.firstname;
    var userLen = userN.value.length;
    // if is the function calling the alert and length is wrong giv us
    if(userLen == 0 || userLen >= min || userLen < max ){
        // alert('user id shouldnt be empty/length should be between'+ max +'to'+ min)
        firstname_error.textContent ='Firstname must be 4 to 10 characters'
        firstname.style.border ='1px solid red'
        firstname.focus();
        return false
      
        
    }
    // if its correct send us to the pass word line 
    document.register.lastname.focus()
    firstname_error.innerHTML = '';
    firstname.style.border ='1px solid green'
    return true
}

// validating the lastname
const userL = (max,min) =>{
    let userL = document.register.lastname;
    var userLen = userL.value.length;
    // if is the function calling the alert and length is wrong giv us
    if(userLen == 0 || userLen >= min || userLen < max ){
        lastname_error.textContent ='Lirstname must be 4 to 10 characters'
        lastname.style.border ='1px solid red'
        lastname.focus();
        return false
      
        
    }
    // if its correct send us to the pass word line 
    document.register.email.focus()
    lastname_error.innerHTML = '';
    lastname.style.border ='1px solid green'
    return true
}

// validating email
const userE = () => {
    let userE = document.register.email
    let emailexp = "^(.+)@(.+)$"
    if(userE.value.match(emailexp)){
        document.register.password.focus()
        email_error.innerHTML = '';
        email.style.border ='1px solid green'
        return true
    }
    else {
        // if it is wrong
        // alert('email invalid')
        email.style.border ='1px solid red'
        email_error.textContent ='Email must have @'
        email.focus()
        return false
    }
}

// validating the password 
const passVal = (max,min) =>{
    let passid = document.register.password;
    var passLen = passid.value.length;
    // if is the function calling the alert and length is wrong giv us
    if(passLen == 0 || passLen >= min || passLen < max ){
        password.style.border ='1px solid red'
        password_error.textContent ='must be between 8-12'
        password.focus()
        return false;
        
    }
    // if its correct send us to the pass word line 
    document.register.confirmpassword.focus()
    password_error.innerHTML = '';
    password.style.border ='1px solid green'
    return true
}
// confirmpassword
const passId = () =>{
    let passid = document.register.password.value;
    let passCom = document.register.confirmpassword.value;
    console.log('password and confirm password',passCom, passid)
    if (passid != passCom) {
        confirmpassword.style.border ='1px solid red'
        confirmpassword_error.textContent ='passwords dont match'
        confirmpassword.focus()
        return false;
    }
     else {
        confirmpassword_error.innerHTML = '';
        confirmpassword.style.border ='1px solid green'
        return true
    }
}
