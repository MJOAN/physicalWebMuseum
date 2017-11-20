
module.exports = function(app) {


  app.get("/:name", function(req, res) {   

  // working on this mysql statement not working	
  connection.query("SELECT * FROM exhibit (name) VALUES (?)", [req.body.name], function(error, result) {
    if (error) {
      return res.status(500).end();
    }
    
    // line 12 is wrong - will look at correct mysql res.render for result from callback indexing into result object
    res.render("index", { name: result, title: result, description: result, created_date: result, image: result });
  });
});

 




};
