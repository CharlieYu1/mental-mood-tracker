const express = require('express');
const router = express.Router();
const users_controller = require('./../../controllers/userController')
const users_validation = require('./../../middlewares/validation/validateUser')

router.post('/signup', users_validation.validateRegister, users_controller.createUser)

router.post('/login', users_validation.validateLogin, users_controller.login)

module.exports = router;