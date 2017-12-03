module.exports = function(sequelize, DataTypes) {
    var LivingWorld = sequelize.define("LivingWorld", {
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

    LivingWorld.associate = function(models) {
        LivingWorld.hasOne(models.Feedback, {
           through: "feedback"
    });
  };
    return LivingWorld;
};







