

module.exports = function(app) {


  app.get("/vangogh", function(req, res) {
  connection.query("SELECT * FROM exhibit;", function(err, data) {
     if (err) {
      return res.status(500).end();
    }
    res.render("index", { name: data, title: data, description: data, created_date: data  });

  });
});




};
