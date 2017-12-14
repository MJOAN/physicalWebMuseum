$(document).ready(function() {

  $("#form").on("submit", function(event) {
    event.preventDefault();

    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();
    // var formData = $(this).serialize();

    const userData = {
        email: email,
        password: password
    };

$.post("/login", userData, function(response) {

    console.log(userData);
    console.log("Thanks for logging in!");

    window.location.href = "/settings";
      });
    });
});