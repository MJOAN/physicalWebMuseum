$(document).ready(function() {

  $("form").on("submit", function(event) {
    event.preventDefault();
  
    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();
    //  var formData = $(this).serialize();

    var userData = {
      email: email, 
      password: password
    }

    console.log(userData);  // userData not working keeping formData

  $.post("/signup", userData, function(userData) {
      console.log("Thanks for signing up!" + userData);
      window.location.href = "/settings";

      }); 
  });
});

