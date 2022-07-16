const router = require('express').Router();
const apiRoutes = require('./noteRoutes.js');

router.use(apiRoutes);

module.exports = router;