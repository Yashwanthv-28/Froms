function validateLogin(){
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("password").value;
    if(email.trim()===""|| password.trim()===""){
        alert("Email and password is empty")
        return false;
    }
    alert("Login successfull!")
    return true;
}
