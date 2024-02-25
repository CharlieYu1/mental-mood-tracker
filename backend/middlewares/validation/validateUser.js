const { body, validationResult } = require('express-validator')

// usage of validation chains: an array of validation criteria, last item is a function

exports.validateRegister = [
    body("username").isLength({ min: 2 })
    .withMessage("must be at least 2 characters").trim().escape(),

    body("password").isLength({ min: 8 })
    .withMessage("must be at least 8 characters").trim().escape(),

    body("email").isEmail().withMessage("isn't valid").trim.escape(),

    (req, res, next) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            let field = errors.errors[0].param;
            let message = errors[0].msg;
            let errorMessage = `${field} ${message}`
        }

        res.status(400).json({
            message: errorMessage,
            errors: errors
        }) else {
            next()
        }
    }
]