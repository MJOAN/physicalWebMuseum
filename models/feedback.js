module.exports = function(sequelize, DataTypes) {
  var Feedback = sequelize.define("Feedback", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Feedback.associate = function(models) {

    console.log(models);
    // We're saying that a Feedback should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Feedback.hasMany(models.AbbotKinney, {
      foreignKey: {
        allowNull: false
      }
    });
  
  };

  return Feedback;
};