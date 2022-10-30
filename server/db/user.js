const Sequelize = require('sequelize');
const db = require('./database');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const axios = require('axios');

const SALT_ROUNDS = 5;


// add a "karma" in here for the game?

// user model
const User = db.define('user', {
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

module.exports = User;


// instanceMethods
User.prototype.correctPassword = function(candidatePwd) {
  // we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password)
}

User.prototype.generateToken = function() {
  return jwt.sign({id: this.id}, process.env.JWT)
}

// classMethods
User.authenticate = async function({ username, password }) {
  const user = await this.findOne({ where: { username } })
  if(!user || !(await user.correctPassword(password))) {
    const error = Error('Incorrect username/password');
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async function(token) {
  try {
    const {id} = await jwt.verify(token, process.env.JWT)
    const user = User.findByPk(id)
    if(!user) {
      throw 'noooooooo'
    }
  } catch(e) {
    const error = Error('bad token')
    error.status = 401;
    throw error;
  }
}

// hooks
const hashPassword = async (user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if(user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
}
