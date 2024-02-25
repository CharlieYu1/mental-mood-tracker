const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activityLogSchema = new Schema({
    type: { type: String, enum: ['Outdoors', 'Sleep', 'Other'], required: true },
    remark: { type: String },
    startTime: { type: Date },
    endTime: { type: Date }
})

module.exports = mongoose.model('ActivityLog', activityLogSchema);