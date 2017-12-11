$(document).ready(function() {

   $("form").submit(function(event) {
    event.preventDefault();
  
    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();
    var formData = $(this).serialize();

    var userData = {
      email: email, 
      password: password
    }

  $.post("/signup", userData, function(response) {

      console.log(email);
      console.log("Thanks for signing up!");

      }); 
  });
});

