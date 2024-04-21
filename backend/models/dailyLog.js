const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dailyLogSchema = new Schema({
    date: { type: Date, default: new Date().setHours(0, 0, 0, 0) },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
    mood: { type: Number, min: 1, max: 10 },
    moodRemarks: { type: String },

    timeToBed: { type: Date },
    timeWakeUp: { type: Date },
    sleepDuration: { type: Number },

    sleepQuality: { 
        type: Number, min: 1, max: 5
    },

    sleepRemarks: { type: String },

    activities: {
        type: Object
    }
})

dailyLogSchema.index({ date: 1, user: 1 }, { unique: true })

module.exports = mongoose.model('DailyLog', dailyLogSchema);