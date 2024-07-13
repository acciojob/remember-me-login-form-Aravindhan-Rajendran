let user = document.getElementById("username");
let pass = document.getElementById("password");
let check = document.getElementById("checkbox");
let submit = document.getElementById("submit");

submit.addEventListener('click', function() {
  if (check.checked) {
    localStorage.setItem("user", user.value);
    localStorage.setItem("password", pass.value);
  } else {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
  }
  alert("Logged in as " + user.value);
});
window.onload = function() {
  if (localStorage.getItem("user")) {
    // Get the "Login as existing user" button by its id
    let existingButton = document.getElementById("existing");
    // Show the button
    existingButton.style.display = "block";
    // Add an event listener for the button
    existingButton.addEventListener('click', function() {
      // Display an alert with the saved username
      alert("Logged in as " + localStorage.getItem("user"));
    });
  }
};