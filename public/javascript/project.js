// function getTweets() {

//     // console.log("hit");

//     var currentURL = window.location.origin;

//     $.ajax({ url: currentURL + "/api/tweets", method: "GET" })
//         .done(function(tweets) {

//             // console.log(tweets);

//             // Loop through and display each of the tweets
//             // for (var i = 0; i < tweets.length; i++) {

//                 // Create the HTML (Section) and Add the tweet content for each tweet
//                 var tweetHouse = $("<div>");
//                 tweetHouse.addClass('card-block');
//                 tweetHouse.append("<h4 class='card-title'>@" + tweets.twitterHandle + "</h4>");
//                 var profilePhoto = $("<img>");
//                 profilePhoto.attr('id', 'profileImg');
//                 profilePhoto.attr('src', tweets.image);
//                 tweetHouse.append(profilePhoto);
//                 var textField = $("<p>");
//                 textField.text(tweets.actualText);
//                 // tweetHouse.append("<p>" + tweets[i].actualText + "<p>");
//                 tweetHouse.append(textField);

//                 $('#twitterSpace').append(tweetHouse);

//         });
// }

// $(document).ready(function() {
// // Run Queries!
// // ==========================================
// getTweets();
// });