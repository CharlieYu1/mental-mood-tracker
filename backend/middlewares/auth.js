const jwt = require('jsonwebtoken')

const secret = process.env.SECRET

const auth = (req, res, next) => {
    const token = req.header("x-auth-token")

    // check token exists
    if (!token) {
        return res.status(403).json(
            message: "Authorization denied, please login"
        )
    }

    
    try {
        // verify token
        const decodedUser = jwt.verify(token, secret)

        // add user from token payload
        req.user = decodedUser

        next()

    } catch (e) {
        res.status(400).({ message: "Please log in" })
    }
}

const adminAuth = (req, res, next) => {
    const { isAdmin } = req.user

    if (!isAdmin) {
        res.status(401).({ message: "Authorization denied, only Admins"})
    } else next();
}

module.exports = { auth, adminAuth }