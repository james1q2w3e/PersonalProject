// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models,

const db = require('./database')
const User = require('./user')
const Score = require('./score')

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

Score.belongsTo(User);
User.hasMany(Score);


module.exports = {
  // Include your models in this exports object as well!
  db,
  User,
  Score,
}

