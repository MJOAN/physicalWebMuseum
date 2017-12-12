//Dependencies
//=====================================
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/controller.js");
const settingsRoutes = require("./controllers/settingsController.js");
const authRoutes = require("./controllers/authController.js");
const clientRoutes = require("./controllers/clientController.js");
const viewArtistRoutes = require("./controllers/artistContentController.js");
const editArtistRoutes = require("./controllers/editArtistController.js");
const db = require("./models");

// Variable Port
//======================================
const PORT = process.env.PORT || 8080;

//Middleware
//======================================
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static("public"));

// ADDED 12-8
const cookieParser = require('cookie-parser');
const passport = require("passport");
const local = require("passport-local");
const session = require('express-session');
const passportconfig = require("./config/passport");

app.use(cookieParser());
app.use(session({secret: 'secret'}));
app.use(passport.initialize());
app.use(passport.session());


// We may need this in server (per Mariam)
// it was in an example of checking to see if user is logged in, but it stops the local host 
// from connecting when it's on 
// ==============================================================

// app.use(function(req, res, callback){  // THIS IS for PASSPORT 
//   if(req.user){
//     res.locals.currentUser = req.user.email
//   }
// })
// END 
// ==============================================================


// Creating the Handlebars View Engine
//======================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routing
//======================================
app.use("/", routes, 
	settingsRoutes, 
	authRoutes,
	clientRoutes,
	viewArtistRoutes,
	editArtistRoutes);

//Lisening to the PORT
//======================================
db.sequelize.sync().then(function(){
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
	});
});

