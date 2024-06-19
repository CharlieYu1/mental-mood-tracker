const path = require('path');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const users_controller = require('./../../controllers/userController')
const users_validation = require('./../../middlewares/validation/validateUser')
const { auth } = require('./../../middlewares/auth')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/')
    },
    filename: (req, profileImage, cb) => {
      cb(null, Date.now() + path.extname(profileImage.originalname))
    }
  })

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 }
})

router.post('/signup', users_validation.validateRegister, users_controller.createUser)

router.post('/login', users_validation.validateLogin, users_controller.login)

router.post('/upload-profile-image', auth, upload.single('profileImage'), users_controller.uploadProfileImage)

// TODO:
// router.post('/change-password', auth, users_controllers.changePassword)

module.exports = router;