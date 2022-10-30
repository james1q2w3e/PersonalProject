const Sequelize = require('sequelize');
const db = require('./database');


// add a "karma" in here for the game?

// user model
module.exports = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true,
        isEmail: true,
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzpFvS0c5IcA6HmBG65eFlwy4WrwJINZ1oQ&usqp=CAU'
  },
});

