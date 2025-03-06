
let signupbtn = document.getElementById("signupBtn");
let signinbtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let forgot_password = document.getElementById('forgot_password');
const password = document.getElementById("pw");

signinbtn.onclick= function(){
    nameField.style.maxHeight="0";
    title.innerText = "Sign in";
    signupbtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    forgot_password.style.display = "block";
    // val(); //Callling the validation
}

signupbtn.onclick= function(){
    nameField.style.maxHeight="60px";
    title.innerText = "Sign up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    forgot_password.style.display = "none";
}
function validatePassword(pw) {
    return /[A-Z]/       .test(pw) &&
        /[a-z]/       .test(pw) &&
        /[0-9]/       .test(pw) &&
        /[^A-Za-z0-9]/.test(pw) &&
        pw.length > 4;

}

function val(){
    let password = document.getElementById("pw").value;
    let error  = document.getElementById("errorPassword");
    if(password.length < 8){ //Check for length of password
        error.innerText = "Password must be longer than 8.";
        error.style.color = "red";
    }
    else if(!/[A-Z]/.test(password)){// Check if there is a single capital letter in password
        error.innerText = "You must have a captial letter.";
        error.style.color = "red";
    }
    else if(!/[a-z]/.test(password)){// Check if there is a single small letter in password
        error.innerText = "You must have a small letter.";
        error.style.color = "red";
    }
    else if(!/[0-9]/.test(password)){// Check if there is a digit in password
        error.innerText = "You must have a digit.";
        error.style.color = "red";
    }
    else if(!/[^A-Za-z0-9]/.test(password)){// Check if there is a special character in the password
        error.innerText = "You must have a special character.";
        error.style.color = "red";
    }
    else{
        error.innerText = "";
    }
}