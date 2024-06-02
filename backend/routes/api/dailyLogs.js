const express = require('express');
const router = express.Router();
const { auth } = require('./../../middlewares/auth')
const dailyLogController = require('./../../controllers/dailyLogController')

router.post('/saveLog', auth, dailyLogController.saveLog)

router.get('/getLog', auth, dailyLogController.getLog)

router.get('/getMonthlyMoods', auth, dailyLogController.getMonthlyMoods)

router.get('/getMonthlySleepHours', auth, dailyLogController.getMonthlySleepHours)

router.get('/getMonthlyActivitiesCount', auth, dailyLogController.getMonthlyActivitiesCount)

module.exports = router;