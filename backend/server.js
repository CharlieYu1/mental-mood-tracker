const express = require('express');
const multer = require('multer');
const path = require('path');

const mongoose = require('mongoose')
const logger = require('morgan')
require('dotenv').config()
const cors = require('cors')

const User = require('./models/UsersModel')
const DailyLog = require('./models/dailyLog')

const usersRouter = require('./routes/api/users')
const dailyLogsRouter = require('./routes/api/dailyLogs')

const app = express()

const mongoUrl = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI

mongoose.connect(mongoUrl)

app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use('/api/users', usersRouter)
app.use('/api/logs', dailyLogsRouter)

if (process.env.NODE_ENV === 'test') {
    const testingRouter = require('./controllers/testing')
    app.use('/api/testing', testingRouter)
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    // console.log(req) TODO: check to include userId of file
    cb(null, Date.now() + path.extname(file.originalFilename))
  }
})


// Connection port for app
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});

module.exports = { storage }