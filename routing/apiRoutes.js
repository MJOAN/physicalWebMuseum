
module.exports = function(app) {


  app.get("/:name", function(req, res) {   
  connection.query("SELECT * FROM exhibit (name) VALUES (?)", [req.body.name], function(error, result) {
    if (error) {
      return res.status(500).end();
    }

    res.render("index", { name: result, title: result, description: result, created_date: result, image: result });
  });
});

 


};
