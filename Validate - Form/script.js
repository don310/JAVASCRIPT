function validateLogin() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
    var errorMessage = document.getElementById("errorMessage");

    // Clear previous error message
    errorMessage.textContent = "";

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Username, email, and password are required.";
        return;
    }

    var validUsername = "Deepak";
    var validEmail = "deepak@gmail.com";
    var validPassword = "123456"; 

    if (username === validUsername && email === validEmail && password === validPassword) {
        message.textContent = "You are successfully logged in.";
    } else {
        errorMessage.textContent = "Invalid username, email, or password.";
    }
}
