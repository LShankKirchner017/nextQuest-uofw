const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/gamelists', gameRoutes)

module.exports = router;
