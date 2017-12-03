
module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {

    name: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    artist_id: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1]
        }
    }
  });

  Artist.associate = function(models) {

    Artist.hasMany(models.Artwork, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Artist;
};



