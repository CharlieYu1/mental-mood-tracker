const jwt = require('jsonwebtoken')

const secret = process.env.SECRET

const auth = (req, res, next) => {
 
    const authorization = req.get('Authorization')

    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        req.token = authorization.substring(7)
      } else {
        req.token = null
      }

    // check token exists
    if (!req.token) {
        return res.status(403).json({
            message: "Authorization denied, please login"
        })
    }

    
    try {
        // verify token
        const decodedUser = jwt.verify(req.token, secret)

        // add user from token payload
        req.user = decodedUser

        next()

    } catch (e) {
        console.log(e)
        res.status(400).json({ message: "Please log in" })
    }
}

const adminAuth = (req, res, next) => {
    const { isAdmin } = req.user

    if (!isAdmin) {
        res.status(401).json({ message: "Authorization denied, only Admins"})
    } else next();
}

module.exports = { auth, adminAuth }