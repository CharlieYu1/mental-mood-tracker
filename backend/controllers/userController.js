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

exports.login = async (req, res) => {
    // console.log(req)
    
    await User.findOne({ username: req.body.username }).then(async (user, err) => {
        if (err) {
            return res.json(err);
        } 

        if (!user) {
            return res.status(400).json({ message: "Invalid username" })
        }

        const timeToExpiry = req.body.rememberMe ? 3600 * 24 * 14 : 3600 * 6

        // 1- compare encrypted password with the password provided by user
        await bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(400).json({ message: "Invalid password" })
            }
            if (isMatch) {
                // 2- generate new token
                jwt.sign({
                    id: user.id,
                    isAdmin: user.isAdmin
                },
                secret,  { expiresIn: timeToExpiry },
                (err, token) => {
                    if (err) throw err;
                    else
                        return res.json({
                            token, message: "Login Successfully",
                            user: {
                                id: user.id,
                                username: user.username,
                                email: user.email,
                                isAdmin: user.isAdmin
                            }
                        })
                })
            } else {
                return res.json({success: false, message: "passwords do not match"})
            }
        })
    })
}

exports.uploadProfileImage = async (req, res) => {
    const userId = req.user.id
    // console.log(req)

    try {
        user = await User.findOne({ _id: userId })
        user.profileImage = req.file.filename
        console.log(user)
        user.save().then(savedUser => {
            res.status(201).json({
                message: "Profile image uploaded successfully",
                filename: savedUser.profileImage
            })
            console.log("Profile Image Uploaded: ", savedUser.profileImage)
        }).catch(err => {
            res.status(400).json({
                message: "Failed to save profile Image",
                error: err.message
            })
            console.log("Profile Image Upload failed: ", err.message)
        })
        
    } catch (err) {
        res.status(400).json({
            message: "Error uploading profile Image",
            error: err.message
        })
    }
}

exports.getProfileImage = async (req, res) => {
    console.log(req.params.fileName)
    res.sendFile(req.params.fileName, { root: './uploads'})
}

// export.changePassword = async (req, res) => {

// }