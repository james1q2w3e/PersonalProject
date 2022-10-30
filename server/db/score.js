const Sequelize = require('sequelize');
const db = require('./database');


// user model
module.exports = db.define('score', {
  gameName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true,
    }
  },
  scoreNumber: {
    type: Sequelize.INTEGER,
  },
});
