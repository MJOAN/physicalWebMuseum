$(document).ready(function() {

  var signUp = $(".form-group");

  signUp.on("submit", function(event) {
    event.preventDefault();

    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();
    console.log("got here");
  
  $.ajax({
      type: 'POST',
      url: '/signup',
      data: {
        email: email,
        password: password
      }
    }).then, function(data) {
        console.log(data);
        console.log('Posted email ' + data + ' to the db.');
      }
  });
});

/*
  $.post("/signup", {
      email: email,
      password: password
    }).then(function(user) {
      console.log(user);


      window.location.href = "/login";

 }).catch(function(err) {
      console.log("Incorrect Username or Password");
      console.log(err);

    });
  });

});*/
