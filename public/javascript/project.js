$(document).ready(function() {

$("#chat-submit").on("click", function(event) {
  event.preventDefault();

  var chat = {
    chat: $("#chat-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(chat);

  // Send an AJAX POST-request 
  $.post("/abbotkinney", chat)
    .done(function() {

      var row = $("<div>");
      row.addClass("chat");

      row.append("<p>" + chat.created_at + "</p>");
      row.append("<p>At " + moment(chat.created_at).format("h:mma on dddd") + "</p>");

      $("#chat-area").prepend(row);

    });
});

$.get("/abbotkinney", function(data) {

  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chat");

      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chat-area").prepend(row);

    	}
  	}
});

});
