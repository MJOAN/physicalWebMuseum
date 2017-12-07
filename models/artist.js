module.exports = function(sequelize, DataTypes) {
    var Artist = sequelize.define("Artist", {

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