function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.value.trim() === "") {
        alert(fieldId + " is empty");
        return false;
    }
    return true;
}

function validateLogin() {
    const emailValid = validateField("login-email");
    const passwordValid = validateField("password");

    if (emailValid && passwordValid) {
        alert("Login successful!");
        return true;
    }
    return false;
}

document.getElementById("login-email").addEventListener("change", function() {
    validateField("login-email");
});

document.getElementById("password").addEventListener("change", function() {
    validateField("password");
});

document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.textContent = type === "password" ? "Show" : "Hide";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    if (!validateLogin()) {
        event.preventDefault();
    }
});
