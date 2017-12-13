# physicalWebMuseum
Ever been to a museum?

<img src="https://user-images.githubusercontent.com/29084524/33924918-f4253c72-df8c-11e7-8802-1c886772f3af.png" width="425"/>

-Of course you have.

Ever wanted to get more information about a piece or work of art?

-Sure

Do you want to download a new app or search on your phone for relavant information?

-Probably not...

That's where Beacon Global comes in to play. Bringin the offline, online

<img src="https://user-images.githubusercontent.com/29084524/33924916-f3f9c150-df8c-11e7-8ea6-469a566b2d43.png" width="425"/> <img src="https://user-images.githubusercontent.com/29084524/33924917-f40ee512-df8c-11e7-8318-77795e383473.png" width="425"/>

## Instructions
Give us a call and we will be more than happy to set you up with all kinds of beacon inspired products. From the aformentioned physical web museum project, to photo walls, to even dating sites on the go. The possibilities are endless with beacon technology and Beacon Global is just the comapy to help you reach your goals.

Here you can have a look at the live demo we have

Contact us for more info on pricing and plans.

## Prerequisites

### Chrome on Android

The Physical Web is available starting Chrome version 49 and on devices running Android KitKat (4.4) and above. When you are near a beacon for the first time (and if you have Bluetooth enabled) you will receive a notification describing the Physical Web.

If you’d like to explicitly turn on Physical Web, try the following:

1. Check that you have an active data connection as well as Bluetooth and Location turned on, as outlined above in the Nearby Notifications section.
2. Enable the Physical Web privacy option from within Chrome in Privacy settings:

<img src="https://user-images.githubusercontent.com/29084524/33868219-8e77993c-deb6-11e7-8f07-e9dd69f4320d.png" width="425"/> <img src="https://user-images.githubusercontent.com/29084524/33868224-8eecbbae-deb6-11e7-9978-b83f85c3bb02.png" width="425"/>

<img src="https://user-images.githubusercontent.com/29084524/33868218-8e621dc8-deb6-11e7-8886-76d10c4b21b5.png" width="425"/> <img src="https://user-images.githubusercontent.com/29084524/33868223-8ed64856-deb6-11e7-917c-c70be5b49c4b.png" width="425"/>

<img src="https://user-images.githubusercontent.com/29084524/33868220-8e8d462e-deb6-11e7-87b1-cffb627bfa5a.png" width="425"/>

(Marshmallow ONLY) On Marshmallow (Android 6.0) devices, the Physical Web requires that Chrome is granted the Location runtime permission. If you have not already granted this permission, enabling the Physical Web privacy option will automatically prompt you to grant it. This step is not necessary on pre-Marshmallow versions of Android.

<img src="https://user-images.githubusercontent.com/29084524/33868221-8ea99d38-deb6-11e7-8bf0-00f58351f07b.png" width="425"/>

3. To see URLs when you are nearby a beacon in the future, swipe down on your notification shade to see a low priority notification informing you of nearby Physical Web URLs. swipe down on your notification shade to see a low priority notification.

<img src="https://user-images.githubusercontent.com/29084524/33868222-8ebf6f5a-deb6-11e7-9c57-c85d7caffe56.png" width="425"/>

4. Tap on notification. You will see a list of nearby URLs.

### Chrome on iOS

Chrome for iOS supports the Physical Web as of July 2015. You can take the following steps to discover Physical Web URLs via Chrome for iOS:

1. Turn on Bluetooth if not enabled.

<img src="https://user-images.githubusercontent.com/29084524/33924364-9decedb6-df8a-11e7-9aec-33662a955c94.png" width="425"/>

2. Swipe down notification shade and swipe to the left to visit ‘Today’ view. Scroll to the bottom and tap ‘Edit’.

<img src="https://user-images.githubusercontent.com/29084524/33924366-9e2a9ad0-df8a-11e7-9c1e-160b46a81286.png" width="425"/>

3. Scroll down to the ‘More Widgets’ section and add the Chrome widget.

<img src="https://user-images.githubusercontent.com/29084524/33924361-9dabc0e8-df8a-11e7-9de2-e56ac4fb40c0.png" width="425"/> <img src="https://user-images.githubusercontent.com/29084524/33924362-9dc143dc-df8a-11e7-94a2-66a1c66c1a5e.png" width="425"/>

4. Click ‘Done’ and scroll to the Chrome widget. Opt in to the Physical Web. If the opt-in message does not appear, toggle the "Show More" button until the widget expands.

<img src="https://user-images.githubusercontent.com/29084524/33924365-9e114f4e-df8a-11e7-9ab9-06b901ea3af8.png" width="425"/>

5. Go near beacons broadcasting Eddystone-URL sites. You should now see beacons in the widget.

<img src="https://user-images.githubusercontent.com/29084524/33924363-9dd6874c-df8a-11e7-9807-b601dfc1de51.png" width="425"/>

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
-Mariam's story-

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

