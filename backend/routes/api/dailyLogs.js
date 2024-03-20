const express = require('express');
const router = express.Router();
const { auth } = require('./../../middlewares/auth')
const dailyLogController = require('./../../controllers/dailyLogController')

router.post('/saveLog', auth, dailyLogController.saveLog)

// router.get('/logs', auth, dailyLogController.fetchLogs)

module.exports = router;