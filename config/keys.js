const Twitter = require('twitter');
// const Instafeed = require('instafeed');

const twitterKeys = {
  consumer_key: 'HpiZbXUHIi7yiLY4jtIRnKgPT',
  consumer_secret: '5GuqMHGnOjgx5nn0ppoUEd2FcnWPKgRcGr5L9tBXxjVWB0KnPF',
  access_token_key: '920758443262095360-uUH08IR0idW9cg6YFwnCNcVmeTwqSU9',
  access_token_secret: 'yzClfRG3XEWpqBLQdYXUJubswrfVJPY3otobBySMjuEOq',
}

const client = new Twitter ({
	consumer_key: twitterKeys.consumer_key,
	consumer_secret: twitterKeys.consumer_secret,
	access_token_key: twitterKeys.access_token_key,
	access_token_secret: twitterKeys.access_token_secret
});

// console.log("hit");

module.exports = client;