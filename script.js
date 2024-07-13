document.addEventListener('DOMContentLoaded', function() {
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let check = document.getElementById("checkbox");
    let submit = document.getElementById("submit");
    let existingContainer = document.getElementById("existing-container");
    let existingBtn = document.getElementById("existing");

    // Check for existing user on page load
    if (localStorage.getItem("user")) {
        existingContainer.style.display = "block";
        existingBtn.innerText = "Login as " + localStorage.getItem("user");
    }

    // Handle submit button click
    submit.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        if (check.checked) {
            localStorage.setItem("user", user.value);
            localStorage.setItem("password", pass.value);
        } else {
            localStorage.removeItem("user");
            localStorage.removeItem("password");
        }
        alert("Logged in as " + user.value);
        if (localStorage.getItem("user")) {
            existingContainer.style.display = "block";
            existingBtn.innerText = "Login as " + localStorage.getItem("user");
        }
    });

    // Handle existing user button click
    existingBtn.addEventListener('click', function() {
        alert("Logged in as " + localStorage.getItem("user"));
    });
});