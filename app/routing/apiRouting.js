var client = require('../../config/keys.js');

module.exports = function(app) {

    app.get("/api/tweets", function(req, res) {

        var query = {
            q: '#vangogh',
            count: 1
        };

        client.get('search/tweets', query, function(error, tweets, response) {
            if (error) {
                throw error
            } else {

                for (i = 0; i < tweets.statuses.length; i++) {


                    var result = {
                        twitterHandle: tweets.statuses[i].user.name,
                        actualText: tweets.statuses[i].text,
                        time: tweets.statuses[i].created_at,
                        image: tweets.statuses[i].user.profile_image_url_https
                    };

                    console.log(result);

                    res.json(result);

                }

            }

        });

    });

}