const login = document.getElementById("signin");
const signup = document.getElementById("signup");
const signup2 = document.getElementById("signup2");
const body = document.getElementById("mainbody");


const quit = document.querySelectorAll(".close");
const loginModal = document.querySelectorAll(".login-modal");
const signModal = document.querySelectorAll(".signup-modal");



login.addEventListener("click", showlogin)
signup2.addEventListener('click', showsign)
signup.addEventListener('click', showsign)


function showlogin() {
    for(btn of loginModal) {
        btn.classList.add("active-modal");
        body.style.opacity=0.2;
    }

}

function showsign() {
    for(quitlogin of loginModal) {
        quitlogin.classList.remove("active-modal");
        body.style.opacity=1;

    }

    for(button of signModal) {
        button.classList.add("active-modal")
        body.style.opacity=0.2;
    }

}

// remove class

for(exitbtn of quit){
    exitbtn.addEventListener("click", closelogin);
}

function closelogin() {
    for(quitlogin of loginModal) {
        quitlogin.classList.remove("active-modal");
        body.style.opacity=1;
    }

    for(quitsign of signModal) {
        quitsign.classList.remove("active-modal")
        body.style.opacity=1;
    }
}


//form validate

const forms = document.querySelectorAll('form');
const form1 = forms[0];
const form2 = forms[1];
const input = form1.querySelectorAll("input")
const username1 = input[0];
const emailid1 = input[1];
const password1 = input[2];
const passwordconfirm1 = input[3];

//values

let userCheck = false;
let emailCheck = false;
let passCheck = false;
let ConPassCheck = false;


form1.addEventListener('submit', e => {
    e.preventDefault();
    checkInputSign();
    confirmValidate();
});

function checkInputSign() {
    const usernameValue1 = username1.value.trim();   
    const emailidValue1 = emailid1.value.trim();
    const passwordValue1 = password1.value.trim();
    const password2confirm1= passwordconfirm1.value.trim(); 

    if(usernameValue1 === '') {
        setErrorFor(username1, 'Username cannot be blank');
        userCheck = false;
    } else {
        setSucessFor(username1);
        localStorage.setItem('uName', usernameValue1);
        userCheck = true;
        
    }

    if(emailidValue1==="") {
        setErrorFor(emailid1, 'Email cannot be empty');
        emailCheck = false;
    }

    else if(!isEmail(emailidValue1)) {
        setErrorFor(emailid1, "Not a valid email");
        emailCheck = false;
    } else {
        setSucessFor(emailid1);
        emailCheck = true;
        localStorage.setItem('email', emailidValue1);
    }

    if(passwordValue1 === "") {
        setErrorFor(password1, 'Password can be empty');
        passCheck = false;
    } else {
        setSucessFor(password1);
        passCheck = true;
    }

    if(password2confirm1 === '') {
        setErrorFor(passwordconfirm1, 'Confirm password cannot be empty');
        ConPassCheck = false;
    } 

    else if (password2confirm1 !== passwordValue1){
        setErrorFor(passwordconfirm1, "Password Didn't Match");
        ConPassCheck = false;
    } else {
        setSucessFor(passwordconfirm1);
        ConPassCheck = true;
        localStorage.setItem('pass', password2confirm1);
    }

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const tick = formControl.querySelector('i');
    const error = formControl.querySelector('small');
    const span = formControl.querySelector('span');
    tick.className = 'error show fa fa-exclamation-circle';
    span.className = "correct fa fa-check-circle";
    error.innerText = message;
}


function setSucessFor (input) {
    const formControl = input.parentElement;
    const tick = formControl.querySelector('i');
    const error = formControl.querySelector('small');
    const span = formControl.querySelector('span');
    span.className = "correct show fa fa-check-circle";
    tick.className = 'error fa fa-exclamation-circle';
    error.innerText = "";
}



function confirmValidate(){
    if (userCheck && passCheck && ConPassCheck && emailCheck === true) {
        console.log("gg")
        form1.submit();
        window.location = "http://127.0.0.1:5500/dashboard.html";
    }
}



//login 

form2.addEventListener('submit', e => {
    e.preventDefault();
    checkLogin();
})

function checkLogin(){
    const input2 = form2.querySelectorAll('input')
    const userNameCheck = input2[0].value;
    const passwordCheck = input2[1].value;
    const uName = localStorage.getItem('uName');
    const pass = localStorage.getItem('pass');
    const small = form2.querySelector('small')

    console.log(userNameCheck)
    console.log(passwordCheck)

    if(userNameCheck===uName && passwordCheck===pass) {
        form2.submit();
        window.location = "http://127.0.0.1:5500/dashboard.html";
    }
    else {
        small.innerText = "Incorrect Username or Password";
    }
}


//dashboard

let dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();