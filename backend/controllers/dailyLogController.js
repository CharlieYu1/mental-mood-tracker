const User = require('../models/UsersModel')
const DailyLog = require('../models/dailyLog')

exports.saveMoodLog = async (req, res, next) => {
    const userId = req.user.id;
    const date = req.body.date || new Date().setHours(0, 0, 0, 0);


    await DailyLog.findOne({ date: date, user: userId }).then((dailyLog, err) => {
        if (err) {
            res.status(400).json({
                message: "Error fetching mood log from database"
            })
            return ;
        }
        
        if (!dailyLog) {
            dailyLog = new DailyLog({
                date: date,
                user: userId,
                mood: req.body.mood,
                moodRemarks: req.body.moodRemarks
            })
        } else {
            dailyLog.mood = req.body.mood,
            dailyLog.moodRemarks = req.body.moodRemarks
        }
               

        dailyLog.save().then(dailyLog => {
            res.json({
                message: "Mood log saved successfully",
                dailyLog: dailyLog
            })
        })
    }).catch(err => {
        res.status(400).json({
            message: "Error saving mood log",
            err
        })
    })
}

// TODO: controller routes for saving other parts of mood logs, and get routes

