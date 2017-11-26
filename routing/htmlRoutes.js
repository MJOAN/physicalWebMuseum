
var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "main"));
  });
 
  // index route loads view.html
  app.get("/vangogh", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });

  app.get("/monet", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });

  app.get("/picasso", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });

  app.get("/davinci", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });

  app.get("/rembrandt", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });

  app.get("/caravaggio", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });

  // all route loads all artist pieces from exhibit
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });


  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "main"));
  });




};


