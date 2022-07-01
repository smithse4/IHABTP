const router = require('express').Router();
const boneRoutes = require('./bone-routes');

router.use('/bones', boneRoutes);

module.exports = router;
