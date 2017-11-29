
const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");


var Exhibit = sequelize.define("exhibit", {
  name: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  created_date: {
    type: Sequelize.INTEGER
  },
  medium: {
    type: Sequelize.STRING
  },
  imgURL: {
    type: Sequelize.BLOB
  }
}, {
  timestamps: false
});

Exhibit.sync();

module.exports = {
  table1: Exhibit
}

