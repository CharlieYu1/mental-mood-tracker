const express = require('express');
const router = express.Router();
const testing_controller = require('./../../controllers/testingController')

router.post('/reset', testing_controller.reset);

module.exports = router;