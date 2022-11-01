const router = require('express').Router();
const { User, Score } = require('../db/index')
module.exports = router

// signup route
router.post('/register', async (req, res, next) => {
  try {
    console.log("AAAAAAAAAAAAAAA",req.body);
    const user = await User.create(req.body)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})


// login route
router.post('/signin', async (req, res, next) => {
  try {
    console.log('/signin', req.body);
    res.send({ token: await User.authenticate(req.body) })
  } catch(e) {next(e)}
})