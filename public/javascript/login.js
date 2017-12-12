$(document).ready(function() {


  $("#form").on("submit", function(event) {
    event.preventDefault();

    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();


    const userData = {
      email: email,
      password:  password
    };
    
    // loginUser(userData);
    console.log(userData)

    // function loginUser(userData) {
       $.ajax({
          url: "/login",
          type: "POST",
          data: userData
        }).done(function(data) {
          console.log('Log In Successful!');
          console.log(userData);

        }).fail(function(err) {
          console.log(err);
      });
    };
  });
});


