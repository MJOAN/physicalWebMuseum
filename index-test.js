const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();


router.post("/signup", function(req, res) {
    console.log(req.body.email);
    console.log(req.body.password);

    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(email) {
        
        if (email)
        {
            return done(null, false, {
                message: 'That email is already taken'
            });

        } else {
            var data = {
                email: req.body.email,
                password: req.body.password
            };

            var userpassword = data.password;
            var hashpassword = generateHash(userpassword);

            function generateHash(password) {
                return bcrypt.hashSync(hashpassword, bcrypt.genSaltSync(8), null);
            };

        db.User.create({data}).then(function(user, create) {
                if (!data) {
                    return done(null, false);
                }
                if (data) {
                    return done(null, data);
                }
            });
        }
    });
});


router.post("/login", passport.authenticate('local', {
    successRedirect: '/settings',
    failureRedirect: '/signin'
}), function(req, res, info){
    res.render('settings');

});


router.get('/', (req, res) => {
    res.render('index', { user : req.user });
});

router.get('/register', (req, res) => {
    res.render('register', { });
});

router.post('/register', (req, res, next) => {
    Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});


router.get('/login', (req, res) => {
    res.render('login', { user : req.user, error : req.flash('error')});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/ping', (req, res) => {
    res.status(200).send("pong!");
});

module.exports = router;
