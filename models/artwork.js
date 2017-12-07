module.exports = function(sequelize, DataTypes) {
    var Artwork = sequelize.define("pexq5x6f1q61gr26.Artwork", {

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

    // Artwork.associate = function(models) {

    //     Artwork.belongsTo(models.artists, {
    //         foreignKey: 'artistId',
    //         refrences: 'artists',
    //         refrencesKey: 'id'
    //     });
    // };

    return Artwork;
};