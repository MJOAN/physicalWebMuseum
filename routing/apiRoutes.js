
module.exports = function(app) {


// for ONE artist OR display ALL

  app.get("/:name?", function(req, res) {

    if (req.params.name) {

      // display the JSON for ONLY that name
      Exhibit.findOne({
        where: {
          routeName: req.params.name
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    else {

      Exhibit.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });


// for display ALL 

  app.get("/all", function(req, res) {
    Exhibit.findAll({}).then(function(results) {
      res.json(results);
    });
  });


};
