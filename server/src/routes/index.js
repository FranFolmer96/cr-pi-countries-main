const { Router } = require("express");

const router = Router();
const countryRoute = require('./countries')
const activityRoute = require('./activity')

router.use('/countries', countryRoute)
router.use('/activity', activityRoute)


module.exports = router;
