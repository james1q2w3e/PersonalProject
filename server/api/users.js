const router = require('express').Router();
const { User, Score } = require('../db/index')


// matches GET requests to /api/puppies/
// router.get('/', function (req, res, next) { /* etc */});

// matches POST requests to /api/puppies/
// router.post('/', function (req, res, next) { /* etc */});

// signup route
// router.post('/register', async (req, res, next) => {
//   try {
//     console.log("AAAAAAAAAAAAAAA",req.body);
//     const user = await User.create(req.body)
//     res.send({token: await user.generateToken()})
//   } catch (err) {
//     if (err.name === 'SequelizeUniqueConstraintError') {
//       res.status(401).send('User already exists')
//     } else {
//       next(err)
//     }
//   }
// })


// // login route
// router.post('/signin', async (req, res, next) => {
//   try {
//     console.log('/signin', req.body);
//     res.send({ token: await User.authenticate(req.body) })
//   } catch(e) {next(e)}
// })

// matches PUT requests to /api/puppies/:puppyId
router.put('/:userId', function (req, res, next) { /* etc */});

// matches DELETE requests to /api/puppies/:puppyId
router.delete('/:userId', function (req, res, next) { /* etc */});


module.exports = router;