const express = require('express');
const router = express.Router();
const users_controller = require('./../../controllers/userController')

router.post('/signup', users_controller.createUser)


// TODO: auth
// TODO: users_controller
// TODO: users_validation

// TODO: routes and controllers

module.exports = router;