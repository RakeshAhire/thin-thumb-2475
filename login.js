// let data = JSON.parse(localStorage.getItem("big-user")) || [];

document.querySelector("#login").addEventListener("click", signupFunc);

function signupFunc() {
    let mobile=document.querySelector("#mobile").value;
    if(check(mobile) == true) {
        alert("Otp successfully send")
        window.location.href="otp.html";
    }
    else {
        alert("Enter 10 digit");
    }
}

function check(mobile) {    
    if (mobile.length==10) {
        return true;
    }
    else {
        return false;
    }
    
}
