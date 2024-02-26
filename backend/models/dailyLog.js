const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dailyLogSchema = new Schema({
    time: { type: Date, default: new Date().setHours(0, 0, 0, 0) },
    
    mood: { type: Number, min: 1, max: 10 },
    moodRemarks: { type: String },

    timeToBed: { type: Date },
    timeWokeUp: { type: Date },
    sleepDuration: { type: Number },

    sleepQuality: { 
        type: String, 
        enum: ['Very Poor', 'Poor', 'Fair', 'Good', 'Very Good']
    }

    sleepRemarks: { type: String },

    activities: {
        type: [String],
        default: []
    }
})

module.exports = mongoose.model('MoodLog', dailyLogSchema);