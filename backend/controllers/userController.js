const User = require('../models/UsersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = process.env.SECRET

exports.createUser = async (req, res, next) => {

    let hasError = false;

    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        activityLogs: [],
        moodLogs: [],
        isAdmin: false
    })

    // 1- Check is the username is taken
    await User.findOne({ username: req.body.username }).then((duplicateUser, err) => {
        if (err) {
            hasError = true;
            res.status(400).json({
                message: "Error getting username"
            });
        } else if (duplicateUser) {
            hasError = true;
            res.status(400).json({
                message: "Username is taken"
            });
        }
    })
    if (hasError) { return }

    // 2- Check is the email name is taken
    await User.findOne({ email: req.body.email }).then((duplicateUser, err) => {
        if (err) {
            hasError = true;
            res.status(400).json({
                message: "Error getting email"
            });
        } else if (duplicateUser) {
            hasError = true;
            res.status(400).json({
                message: "User with same email is taken"
            });
        }
    })
    if (hasError) { return }

    // 3- verify the password
    if (req.body.password != req.body.verifyPassword) {
        hasError = true;
        res.status(400).json({
            message: "Password mismatch"
        });
    }
    if (hasError) { return }

    // 4- encrypt the password
    const saltRounds = 12
    newUser.password = await bcrypt.hash(req.body.password, saltRounds)

    // 5- save the new user and generate jwt token to send to user

    newUser.save().then(user => {
        jwt.sign({
            id: user.id,
            isAdmin: user.isAdmin
        },
        secret,
        { expiresIn: 3600 },
        (err, token) => {
            console.log("err", err)
            console.log("token", token)
            if (err) throw err;
            else
                res.json({
                    token,
                    message: "Registered Successfully",
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        isAdmin: user.isAdmin
                    }
                })
        })
    }).catch(err => {
        res.status(400).json({
            message: "Error registering",
            err
        })
    })
}

// generate json token and send with user