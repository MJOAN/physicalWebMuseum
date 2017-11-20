
<<<<<<< HEAD

module.exports = function(app) {


  app.get("/vangogh", function(req, res) {
  connection.query("SELECT * FROM exhibit;", function(err, data) {
     if (err) {
      return res.status(500).end();
    }
    res.render("index", { name: data, title: data, description: data, created_date: data  });

  });
});

=======
module.exports = function(app) {


  app.get("/:name", function(req, res) {   
  connection.query("SELECT * FROM exhibit (name) VALUES (?)", [req.body.name], function(error, result) {
    if (error) {
      return res.status(500).end();
    }

    res.render("index", { name: result, title: result, description: result, created_date: result, image: result });
  });
});

 
>>>>>>> d0621f100e3270c2c3f876b9ea4ee48b4f762f11



};
