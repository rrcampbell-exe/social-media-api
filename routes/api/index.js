const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add `/users` and `/thoughts` prefixes to routes created in `user-routes.js` and `thought-routes.js`, respectively
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;