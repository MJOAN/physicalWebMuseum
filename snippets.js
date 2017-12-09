router.post("/signup", function(req, res) {
 db.User.findOne({
    where: {
     email: req.body.email
    }
  }).then(function(user){
    if(!user){
        db.User.create({ 
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        }).then(function() {
          res.send({redirect: '/'});
        }).catch(function(err) {
          res.json(err);
        });
      }
    })
});

router.post('/signup', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if(user){
        req.logIn(user, function(err) {
        if (err) { 
            return next(err); 
        } else {
            res.send({
                success: true,
                response: 'signup successful'
            });
        }
    });
        if(!user){
        res.send({
            success: false,
            response: 'Authentication Failed'
        });
        }

        if(err){
        res.send({
            success: false,
            response: 'Authentication failed'
        })
        }
    })(req, res, next);
});

router.post("/signup", function(req, res, next){
  console.log("email signup route triggered");
  db.User.findOne({
    where: {
     email: req.body.email
    }

  }).then(function(user){
    if(!user){

      db.User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
      }).then(function(user){
        passport.authenticate("local", {failureRedirect:"/", successRedirect: "/login" })(req, res, next)
      })
    } else {
      res.send("user exists")
    }
  })
})





passport.use('local-signup', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true // allows us to pass back the entire request to the callback
},
function(req, email, password, done) {

  db.U.User.findOne({
    where: {
            email: email
    }
}).then(function(user, err) {
    console.log('I entered'+user);
    console.log('I entered'+err);
    if(err) {
            console.log(err);
            return done(null, false);
    }

    if(user == null) {
    Model.User.create({
            email: email,
            password: password
    }).then(function(user) {
            return done(null, user);
    }).catch(function(err) {
            return done(null, err);
    });
}

    if(user){
            return done(null, false);
    }

  })

}));