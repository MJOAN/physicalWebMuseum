$(document).ready(function() {

   $("form").submit(function(event) {
    event.preventDefault();
  
    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();
    var formData = $(this).serialize();
    // console.log(email);

  $.post("/signup", formData, function(response) {
      console.log(email);
      console.log("Thanks for signing up!");

      }); 
  });
});

