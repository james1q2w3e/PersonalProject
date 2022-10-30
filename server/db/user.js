const Sequelize = require('sequelize');
const db = require('./database');


// user model
module.exports = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    alloNull: false,
    validate: {
      notEmpty: true,
    }
  },
  lastName: {
    type: Sequelize.STRING,
    alloNull: false,
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

