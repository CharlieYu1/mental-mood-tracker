const express = require('express');
const router = express.Router();
const users_controller = require('./../../controllers/userController')
const users_validation = require('./../../middlewares/validation/validateUser')

router.post('/signup', users_validation.validateRegister, users_controller.createUser)


// TODO: auth
// TODO: users_controller
// TODO: users_validation

// TODO: routes and controllers

module.exports = router;