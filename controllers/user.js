var db = require('../models');

exports.signUp = function(req, res) {
	res.render("signup.html")
}

exports.register = function(req, res) {
	db.User.find({ where: { email: email }}).success(function(user) {
     	if(!user) {
      		db.User.create({ email: req.body.username, password: req.body.password }).error(function(err) {
      		console.log(err);	
      	});
    	} else {
    		res.redirect('/signup')
    	}
	});
	res.redirect('/');
}