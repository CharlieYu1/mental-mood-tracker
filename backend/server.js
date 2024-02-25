const express = require('express');
const mongoose = require('mongoose')
const logger = require('morgan')
require('dotenv').config()
const cors = require('cors')

const User = require('./models/UsersModel')

const usersRouter = require('./routes/api/users')

const app = express()

const mongoUrl = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI

mongoose.connect(mongoUrl)

app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use('/api/users', usersRouter)

// if (process.env.NODE_ENV === 'test') {
//     const testingRouter = require('./controllers/testing')
//     app.use('/api/testing', testingRouter)
// }

// test route
app.get('/', (req, res) => {
    res.json({ "message": "success" })
})

// Connection port for app
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});