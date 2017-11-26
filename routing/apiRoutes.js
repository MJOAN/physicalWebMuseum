
module.exports = function(app) {


// ONE artist OR display ALL

  app.get("/:name?", function(req, res) {

    if (req.params.name) {

      // display the JSON for ONLY that name
      Exhibit.searchName({
        where: {
          routeName: req.params.name
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    else {

      Exhibit.allNames({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });


// display ALL 

  app.get("/all", function(req, res) {
    Exhibit.allNames({}).then(function(results) {
      res.json(results);
    });
  });


};
