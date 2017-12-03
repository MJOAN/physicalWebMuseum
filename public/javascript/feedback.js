$(document).ready(function() {

$.get("/abbotkinney", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      //row.addClass("feedback");

      row.append("<p>" + data[i].body + "</p>");
      // row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#feedback-area").prepend(row);

      }
    }
  });


$("#feedback-submit").on("click", function(event) {
  event.preventDefault();

  var feedback = {
    feedback: $("#feedback").val().trim(),
    // created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(feedback);

  // Send an AJAX POST-request 
  $.post("/abbotkinney", feedback)
    .done(function() {

      var row = $("<div>");
      // row.addClass("feedback");
      row.append("<p>" + feedback.feedback + "</p>");
      // row.append("<p>At " + moment(feedback.created_at).format("h:mma on dddd") + "</p>");
      $("#feedback-area").prepend(row);

    });
      // $("#feedback-area").val("");
  });

});


