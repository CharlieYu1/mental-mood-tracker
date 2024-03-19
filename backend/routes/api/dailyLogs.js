const express = require('express');
const router = express.Router();
const { auth } = require('./../../middlewares/auth')
const dailyLogController = require('./../../controllers/dailyLogController')
// TODO: maybe add validation for log updates

router.post('/mood', auth, dailyLogController.saveMoodLog)

// router.post('/sleep', auth, dailyLogController.saveSleepLog)

// router.post('/activities', auth, dailyLogController.saveActivityLog)

// router.get('/logs', auth, dailyLogController.fetchLogs)

module.exports = router;