const express = require('express');
const router = express.Router();
const users_controller = require('./../../controllers/userController')
const users_validation = require('./../../middlewares/validation/validateUser')

router.post('/signup', users_validation.validateRegister, users_controller.createUser)

router.post('/login', users_validation.validateLogin, users_controller.login)

// TODO:
// router.post('/upload-profile-image', auth, users_controllers.uploadProfileImage)
// TODO:
// router.post('/change-password', auth, users_controllers.changePassword)

module.exports = router;