const User = require('../models/UsersModel')
const DailyLog = require('../models/dailyLog')

exports.saveMoodLog = async (req, res, next) => {
    const userId = req.user.id;
    const date = req.body.date;

    await DailyLog.findOneAndUpdate({ date: date, user: userId }).then((dailyLog, err) => {
        if (err) {
            res.status(400).json({
                message: "Error fetching mood log from database"
            })
            return ;
        }
        dailyLog = {
            ...dailyLog,
            mood: req.body.mood,
            moodRemarks: req.body.moodRemarks
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

