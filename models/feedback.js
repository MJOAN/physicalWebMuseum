module.exports = function(sequelize, DataTypes) {
  var Feedback = sequelize.define("Feedback", {

   artwork_id: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    created_date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        } // create validation to only allow one date format
    },
    feedback: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
    }
  });

  Feedback.associate = function(models) {
    console.log(models); // check to see what is?
    // post can't be created without an Author due to the foreign key constraint
    Feedback.belongsTo(models.Artwork, {
      foreignKey: {
        allowNull: false
      }
    });
  
  };

  return Feedback;
};