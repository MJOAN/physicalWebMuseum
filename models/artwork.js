module.exports = function(sequelize, DataTypes) {
  var Artwork = sequelize.define("Artwork", {

    artist_id: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
   artwork_id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    title: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    description: { 
        type: DataTypes.TEXT,
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
        } // vTo Do: create validation to only allow one date format
    },
    medium: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    feedback: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    imgURL: {
        type: DataTypes.BLOB,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    beaconID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
      }
    }, {
        timestamps: false
    });

// artwork belongsTo(artist)
// artwork hasMany(feedback)

  Artwork.associate = function(models) {
    
    Artwork.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Artwork.associate = function(models) {
    
    Artwork.hasMany(models.Feedback, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Artwork;
};
