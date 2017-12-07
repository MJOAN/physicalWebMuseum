module.exports = function(sequelize, DataTypes) {
    var Artist = sequelize.define("pexq5x6f1q61gr26.Artist", {

      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      }
    }, 
      {
      timestamps: false
    });

    return Artist;
};