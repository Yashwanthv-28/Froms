document.getElementById("login-email").addEventListener("change", validateEmail);
document.getElementById("password").addEventListener("change", validatePassword);

function validateEmail() {
    let emailInput = document.getElementById("login-email");
    let errorMessage = document.getElementById("email-error");
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailInput.value.match(emailPattern)) {
        errorMessage.textContent = "Please enter a valid email address!";
        errorMessage.style.color = "red";
        emailInput.style.border = "2px solid red";
        console.log(errorMessage,errorMessage.textContent)
    } else {function validateEmail() {
        let emailInput = document.getElementById("login-email");
        let errorMessage = document.getElementById("email-error");
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if (!emailInput.value.match(emailPattern)) {
            errorMessage.textContent = "Please enter a valid email address!";
            emailInput.classList.add("invalid");
            emailInput.classList.remove("valid");
        } else {
            errorMessage.textContent = "";
            emailInput.classList.add("valid");
            emailInput.classList.remove("invalid");
        }
    }
    
    function validatePassword() {
        let passwordInput = document.getElementById("password");
        let errorMessage = document.getElementById("password-error");
    
        if (passwordInput.value.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters long!";
            passwordInput.classList.add("invalid");
            passwordInput.classList.remove("valid");
        } else {
            errorMessage.textContent = "";
            passwordInput.classList.add("valid");
            passwordInput.classList.remove("invalid");
        }
    }
        errorMessage.textContent = ""; // Remove error message if valid
        emailInput.style.border = "2px solid green";
    }
}

function validatePassword() {
    let passwordInput = document.getElementById("password");
    let errorMessage = document.getElementById("password-error"); // Create this element in HTML

    if (passwordInput.value.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long!";
        errorMessage.style.color = "red";
        passwordInput.style.border = "2px solid red";
    } else {
        errorMessage.textContent = ""; 
        passwordInput.style.border = "2px solid green";
    }
}