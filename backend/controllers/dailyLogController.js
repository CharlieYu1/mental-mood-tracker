const User = require('../models/UsersModel')
const DailyLog = require('../models/dailyLog')

const activitiesList = [
	{ type: "social", name: "Family Time"},
	{ type: "social", name: "Friend Hangout"},
	{ type: "social", name: "Friend Date"},
	{ type: "social", name: "Social Events"},
	{ type: "social", name: "Socializing Online"},
	{ type: "social", name: "Other Socials"},
	{ type: "hobbies", name: "Arts/Music"},
	{ type: "hobbies", name: "Sports"},
	{ type: "hobbies", name: "DIY"},
	{ type: "hobbies", name: "Learning"},
	{ type: "hobbies", name: "Travel"},
	{ type: "hobbies", name: "Other Hobbies"},
	{ type: "exercises", name: "Jogging"},
	{ type: "exercises", name: "Gym"},
	{ type: "exercises", name: "Yoga"},
	{ type: "exercises", name: "Cycling"},
	{ type: "exercises", name: "Walking"},
	{ type: "exercises", name: "Other Exercises"},
	{ type: "meal", name: "Breakfast"},
	{ type: "meal", name: "Lunch"},
	{ type: "meal", name: "Dinner"},
	{ type: "meal", name: "Other Meals"}
]

exports.saveLog = async (req, res, next) => {

    const userId = req.user.id;
    const date = req.body.date;



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


exports.getLog = async (req, res, next) => {

    const userId = req.user.id;
    const date = req.query.date;

    console.log(userId, date)
    // console.log(req)

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
                mood: null,
                moodRemarks: "",
                timeToBed: null,
                timeWakeUp: null,
                sleepDuration: null,
                sleepQuality: null,
                sleepRemarks: null,
                activities: Object.fromEntries(
                    activitiesList.map(activity => [activity.name, false])
                )
            })
        } else {
            console.log("dailyLog found")
            console.log(dailyLog)
        }


        res.json({
            message: "fetched dailyLog successfully",
            dailyLog: dailyLog
        })
    })
}