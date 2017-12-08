//Dependencies
//=====================================
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/controller.js");
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

// Creating the Handlebars View Engine
//======================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routing
//======================================
app.use("/", routes);

//Lisening to the PORT
//======================================
db.sequelize.sync().then(function(){
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
	});
});



