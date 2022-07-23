let login_user = JSON.parse(localStorage.getItem('login_user')) || [];

document.querySelector("#login").addEventListener("click", check);

function check() {
    if (document.querySelector("#name").value == "" ||
        document.querySelector("#email").value == "") {
        alert("Please enter Otp/Details");
    }

    else if (document.querySelector("#otp").value == "1234") {
        let obj = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
        }
        login_user.push(obj)
        alert("Login successful");
        window.location.href = "index.html";
        localStorage.setItem("login_user", JSON.stringify(login_user));
    }
    else {
        alert("Otp wrong");
    }
}

