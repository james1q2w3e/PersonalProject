// api/index.js
const router = require('express').Router();

router.use('/users', require('./users')); // matches all requests to /api/users/
// router.use('/route1', require('./route1')); // matches all requests to  /api/puppies/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/


// Error Handling
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;