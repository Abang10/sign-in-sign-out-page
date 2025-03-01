
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

