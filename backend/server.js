const express = require('express');
const mongoose = require('mongoose')
const logger = require('morgan')
require('dotenv').config()
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger("dev"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});