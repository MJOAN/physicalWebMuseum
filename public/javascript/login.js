$(document).ready(function() {

  $("#form").on("submit", function(event) {
      event.preventDefault();

      var email = $("#email-input").val().trim();
      var password = $("#password-input").val().trim();


      const userData = {
          email: email,
          password: password
      };

  $.post("/login", userData, function(response) {

      console.log(email);
      console.log("Thanks for logging up!");

      window.location.href = "/settings";
        });
    });
});