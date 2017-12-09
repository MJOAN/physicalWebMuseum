//Dependencies
//=====================================
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/controller.js");
const db = require("./models");

// adding
const user = require("./routes/user");
const passport = require("passport");
const passportConfig = require("./config/passport");
const home = require("./routes/home");
const application = require("./controllers/application");

// Variable Port
//======================================
const PORT = process.env.PORT || 8080;

SALT_WORK_FACTOR = 12;

//Middleware
//======================================
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// adding
app.use(express.cookieParser());
app.use(express.session({ secret: 'security' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

if ('development' === app.get('env')) {
	app.use(express.errorHandler())
}

app.get('/', routes.index);
app.get('/home', application.IsAuthenticated, home.homepage)
app.post('/authenticate', 
	passport.authenticate('/local', {
		successRedirect: '/home', 
		facilureRedirect: '/'
	})
)

app.get('/logout', application.destroySession)
app.get('/signup', user.signUp)
app.get('/register', user.register)

// Routing --- use line 48 OR use line 44
//======================================
// /app.use("/", routes);

//Lisening to the PORT
//======================================
db.sequelize.sync().then(function(){
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
	});
});



