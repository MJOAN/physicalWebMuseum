# physicalWebMuseum
<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/33924918-f4253c72-df8c-11e7-8802-1c886772f3af.png" width="425"/>
</p>

Ever been to a museum?

-Of course you have.

Ever wanted to get more information about a piece or work of art?

-Sure

Do you want to download a new app or search on your phone for relavant information?

-Probably not...

That's where Beacon Global comes in to play. Bringin the offline, online

<img src="https://user-images.githubusercontent.com/29084524/33924916-f3f9c150-df8c-11e7-8ea6-469a566b2d43.png" width="425"/> <img src="https://user-images.githubusercontent.com/29084524/33924917-f40ee512-df8c-11e7-8318-77795e383473.png" width="425"/>

## Instructions
Give us a call and we will be more than happy to set you up with all kinds of beacon inspired products. From the aformentioned physical web museum project, to photo walls, to even dating sites on the go. The possibilities are endless with beacon technology and Beacon Global is just the comapy to help you reach your goals.

You can have a look at the live demo we have [here](https://quiet-woodland-20976.herokuapp.com/)

Contact us for more info on pricing and plans.

## Prerequisites

### Chrome on Android

The Physical Web is available starting Chrome version 49 and on devices running Android KitKat (4.4) and above. When you are near a beacon for the first time (and if you have Bluetooth enabled) you will receive a notification describing the Physical Web.

If you’d like to explicitly turn on Physical Web, try the following:

1. Check that you have an active data connection as well as Bluetooth and Location turned on, as outlined above in the Nearby Notifications section.
2. Enable the Physical Web privacy option from within Chrome in Privacy settings:

<img src="https://user-images.githubusercontent.com/29084524/33868219-8e77993c-deb6-11e7-8f07-e9dd69f4320d.png" width="425"/> <img src="https://user-images.githubusercontent.com/29084524/33868224-8eecbbae-deb6-11e7-9978-b83f85c3bb02.png" width="425"/>

<img src="https://user-images.githubusercontent.com/29084524/33868218-8e621dc8-deb6-11e7-8886-76d10c4b21b5.png" width="425"/> <img src="https://user-images.githubusercontent.com/29084524/33868223-8ed64856-deb6-11e7-917c-c70be5b49c4b.png" width="425"/>

<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/33868220-8e8d462e-deb6-11e7-87b1-cffb627bfa5a.png" width="425"/>
</p>

(Marshmallow ONLY) On Marshmallow (Android 6.0) devices, the Physical Web requires that Chrome is granted the Location runtime permission. If you have not already granted this permission, enabling the Physical Web privacy option will automatically prompt you to grant it. This step is not necessary on pre-Marshmallow versions of Android.

<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/33868221-8ea99d38-deb6-11e7-8bf0-00f58351f07b.png" width="425"/>
</p>

3. To see URLs when you are nearby a beacon in the future, swipe down on your notification shade to see a low priority notification informing you of nearby Physical Web URLs. swipe down on your notification shade to see a low priority notification.

<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/33868222-8ebf6f5a-deb6-11e7-9c57-c85d7caffe56.png" width="425"/>
</p>

4. Tap on notification. You will see a list of nearby URLs.

### Chrome on iOS

Chrome for iOS supports the Physical Web as of July 2015. You can take the following steps to discover Physical Web URLs via Chrome for iOS:

1. Turn on Bluetooth if not enabled.

<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/33924364-9decedb6-df8a-11e7-9aec-33662a955c94.png" width="425"/>
</p>

2. Swipe down notification shade and swipe to the left to visit ‘Today’ view. Scroll to the bottom and tap ‘Edit’.

<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/33924366-9e2a9ad0-df8a-11e7-9c1e-160b46a81286.png" width="425"/>
</p>

3. Scroll down to the ‘More Widgets’ section and add the Chrome widget.

<img src="https://user-images.githubusercontent.com/29084524/33924361-9dabc0e8-df8a-11e7-9de2-e56ac4fb40c0.png" width="425"/> <img src="https://user-images.githubusercontent.com/29084524/33924362-9dc143dc-df8a-11e7-94a2-66a1c66c1a5e.png" width="425"/>

4. Click ‘Done’ and scroll to the Chrome widget. Opt in to the Physical Web. If the opt-in message does not appear, toggle the "Show More" button until the widget expands.

<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/33924365-9e114f4e-df8a-11e7-9ab9-06b901ea3af8.png" width="425"/>
</p>

5. Go near beacons broadcasting Eddystone-URL sites. You should now see beacons in the widget.

<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/33924363-9dd6874c-df8a-11e7-9807-b601dfc1de51.png" width="425"/>
</p>

## Requirements
**The requirements for Project #2 are as follows:**

* Must use a Node and Express Web Server
* Must be backed by a MySQL Database with a Sequelize ORM
* Must have both GET and POST routes for retrieving and adding new data
* Must be deployed using Heroku (with Data)
* Must utilize at least one new library, package, or technology that we haven’t discussed
* Must have a polished frontend / UI
* Must have folder structure that meets MVC Paradigm
* Must meet good quality coding standards (indentation, scoping, naming)

## Code Higlights

### Authenticating users with Passport
Passport is a authentication middleware developed by Jared Hanson which we used in our Node.js web application. Looking through documentation you see there is basic template code you can use to get set up fairly easily. To begin you must configure passport middleware on your server file. You must require your npm packages: ‘passport’, ‘passport-local’, ‘express-session’. Then you must include built in methods such as, passport.initalize() and passport.session(). There is also an express.session() feature which will serve as your secret for authentication of the session. I learned this is optional but, recommended.

Once middleware is set up, I moved onto what passport calls, “strategies”. This was the learning curve because reviewing forums with solutions you realize there are many ways to implement and configure these strategies. I ended up going with a basic passport local strategy, for example, the first line is: “passport.use(new LocalStrategy(“. Looking at this and seeing the “new” keyword leads me to think we are setting up a new class or some type of ‘new’ instance of a method. From there, you declare a function which checks username, password, and then a callback. There are then two templates to use for the last part of the strategy configuration and those are serializeUser and deserializeUser. These are the functions related to your users session after authentication. Serialize means that passport is storing your users ID in an request object [req.user] with key/values for a session which is based on the users login -- either email or username. Deserialize will then load any new user informaiton on each request which I learned uses the passport.session() method we have in our server file. Overall, I was able to get our emails and hashed passwords stored into the database in our User model.

Looking at documentation I learned Passport works with OAuth which I know about from project 1 and will work with Facebook and Twitter. This will ultimately be my next challenge along with completing my debugging with the isAuthenticated function that only allows an authenticated user logged in to your site -- and finalizing compare hashed passwords logic.

```
const express = require("express");
const db = require("../models");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

router.post("/signup", function(req, res, next){
console.log(req.body.email);
db.User.findOne({
where: {
email: req.body.email
}
}).then(function(user) {
if (!user) {
db.User.create({
email: req.body.email,
password: bcrypt.hashSync(req.body.password)
}).then(function(user) {
passport.authenticate("local", { failureRedirect: "/", successRedirect: "/login" })(req, res, next)
})   } else {
res.send("user is now signed up! Redirect to the settings page!");
res.json(user);
}
})
});
module.exports = router;
```
### Using handlebars to pass custom CSS and JS into rendered route
As you can see below, we structred our routes to grab data from the database with Sequelize. Then passing it as a handlebars object to be rendered. That's nothing new but figuring out that we could also package within that object a string that references CSS and JS routes that we serve statically in our server.js
```
router.get("/settings", function(req, res) {
db.Artist.findAll({
include: [{
model: db.Artwork
}],
order: [
['id', 'ASC']
]
}).then(authorList => {

hbsObject = {
artists: authorList,
pageTitle: 'Exhibition Management',
customCss: './css/settingsPage.css',
customJS: './javascript/artist.js'
}

res.render('manageExhibitions', hbsObject);
})
});
```
This then gets rendered as a triple handlebars object {{{}}} so that it escapes it's normal functionality and gets read as a string by HTML5 which then just looks for the publically served files. This revelation saved us from having to create different layouts and helped cleanup our views. Also allowing us to further modularize our CSS and JS files.
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="{{{customCss}}}" />
<title>{{pageTitle}}</title>
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
<script type="text/javascript" src="{{{customJS}}}"></script>
</head>
<body>
{{{ body }}}
</body>
</html>
```

## Built With
+ [Node.js](https://nodejs.org/en/)
+ [Express.js NPM Package](https://www.npmjs.com/package/express)
+ [Body Parser NPM Package](https://www.npmjs.com/package/body-parser)
+ [Express Handlebars NPM Package](https://www.npmjs.com/package/express-handlebars)
+ [Moment.js](http://momentjs.com/)
+ [MySQL](https://www.npmjs.com/package/mysql)
+ [Sequelize](http://docs.sequelizejs.com/)
+ [Cookie-Parser NPM Package](https://www.npmjs.com/package/cookie-parser)
+ [Passport NPM Package](https://www.npmjs.com/package/passport)
+ [Passport-Local NPM Package](https://www.npmjs.com/package/passport-local)
+ [Express-Session NPM Package](https://www.npmjs.com/package/express-session)
+ [Bootstrap 4](https://getbootstrap.com/)
+ [Twitter](https://twitter.com/)
+ [Google Fonts](https://fonts.google.com/)
+ [Heroku](https://dashboard.heroku.com/)

### Authors
+ [Alex Edward Ball](https://github.com/AlexEBall)
+ [Mariam Joan](https://github.com/MJOAN)
+ [Sascha Schneider](https://github.com/saschaschneider)

