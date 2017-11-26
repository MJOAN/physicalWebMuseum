
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

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

const routes = require("./controllers/controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});



