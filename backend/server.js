const express = require('express');
const mongoose = require('mongoose')
const logger = require('morgan')
require('dotenv').config()
const cors = require('cors')

const app = express()

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl)

app.use(express.json())
app.use(cors())
app.use(logger("dev"))

if (process.env.NODE_ENV === 'test') {
    const testingRouter = require('./controllers/testing')
    app.use('/api/testing', testingRouter)
}

// Connection port for app
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});