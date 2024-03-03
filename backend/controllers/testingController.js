const User = require('../models/User');
const DailyLog = require('../models/DailyLog');

exports.reset = async (req, res) => {
    await User.deleteMany({})
    await DailyLog.deleteMany({})
  
    res.status(204).end()
})