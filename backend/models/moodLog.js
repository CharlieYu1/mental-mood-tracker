const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodLogSchema = new Schema({
    remark: { type: String },
    mood: { type: Number, min: 1, max: 10 },
    time: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('MoodLog', moodLogSchema);