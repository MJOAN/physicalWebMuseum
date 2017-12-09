$(document).ready(function() {

  const loginForm = $(".form-group");
  const email = $("#email-input");
  const password = $("#password-input");

  loginForm.on("submit", function(event) {
    event.preventDefault();

    var user = {
      email: email.val().trim(),
      password: password.val().trim()
    };

  $.post("/login", {
      email: user.email,
      password: uesr.password
    }).then(function(user) {
      console.log(user);

      window.location.href = "/settings";

 }).catch(function(err) {
      console.log("Incorrect Username or Password");
      console.log(err);

    });
  };

});
