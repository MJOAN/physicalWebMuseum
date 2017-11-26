
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const gcloud = require("google-cloud");
const connection = require(".config/connection.js");

const app = express();
const PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static("public"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});



