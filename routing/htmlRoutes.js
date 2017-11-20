var path = require("path");


module.exports = function(app) {

<<<<<<< HEAD

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });




=======
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "main"));
  });

 
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "main"));
  });


>>>>>>> d0621f100e3270c2c3f876b9ea4ee48b4f762f11
};
