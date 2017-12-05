module.exports = function(sequelize, DataTypes) {
  var Artwork = sequelize.define("Artwork", {

    route: { 
        type: DataTypes.STRING,
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
        } 
    },
    medium: {
        type: DataTypes.STRING,
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
    videoURL: {
        type: DataTypes.BLOB,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    audioURL: {
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
    }
    }, {
        timestamps: false
    });

  Artwork.associate = function(models) {
    
    Artwork.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: true 
      }
    });
  };

  return Artwork;
};
