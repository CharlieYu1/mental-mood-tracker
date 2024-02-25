const User = require('../models/UsersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = process.env.SECRET

exports.createUser = async (req, res, next) => {
    try {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            activityLogs: [],
            moodLogs: [],
            isAdmin: false
        })

        // 1- Check is the username is taken
        await User.findOne({ username: req.body.username }).then((err, duplicateUser) => {
            if (err) {
                throw new Error("error getting username")
            } else if (duplicateUser) {
                throw new Error("username is taken")
            }
        })

        // 2- Check is the email name is taken
        await User.findOne({ email: req.body.email }).then((err, duplicateUser) => {
            if (err) {
                throw new Error("error getting email")
            } else if (duplicateUser) {
                throw new Error("User with same email already exists")
            }
        })

        // 3- verify the password
        if (req.body.password != req.body.verifyPassword) {
            throw new Error("Password mismatch")
        }

        // 4- encrypt the password and save the new user
        const saltRounds = 12
        newUser.password = await bcrypt.hash(req.body.password, saltRounds)

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(400).json({message: error.message}).end()
        next(error)
    }

}