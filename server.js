const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const connection = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 8080;

// mysql connection

const mysql = require("mysql");   

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "physicalweb_museum"
});

connection.connect(function(error) {
  if (error) {
    console.error("There is an error connecting: " + error.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});

// middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listen

app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});

