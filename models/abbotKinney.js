module.exports = function(sequelize, DataTypes) {
    var AbbotKinney = sequelize.define("AbbotKinney", {
        name: { // Artist Name 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        title: { // artwork title
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: { // artwork title
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
        }
    }, {
        timestamps: false
    });

    AbbotKinney.associate = function(models) {
  
        AbbotKinney.hasOne(models.Feedback, {
            through: "feedback"
        });
  };

    return AbbotKinney;
};