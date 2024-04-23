const User = require('../models/UsersModel')
const DailyLog = require('../models/dailyLog')

exports.saveLog = async (req, res, next) => {
    console.log(req.body)

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
                moodRemarks: req.body.moodRemarks,
                timeToBed: req.body.timeToBed,
                timeWakeUp: req.body.timeWakeUp,
                sleepDuration: req.body.sleepDuration,
                sleepQuality: req.body.sleepQuality,
                sleepRemarks: req.body.sleepRemarks,
                activities: req.body.activities
            })
        } else {
            dailyLog.mood = req.body.mood,
            dailyLog.moodRemarks = req.body.moodRemarks
            dailyLog.timeToBed = req.body.timeToBed
            dailyLog.timeWakeUp = req.body.timeWakeUp
            dailyLog.sleepDuration = req.body.sleepDuration
            dailyLog.sleepQuality = req.body.sleepQuality
            dailyLog.sleepRemarks = req.body.sleepRemarks
            dailyLog.activities = req.body.activities
        }
        
        console.log(dailyLog)

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

