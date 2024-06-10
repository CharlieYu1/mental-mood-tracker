const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profileImage: { type: String, default: '' }
    dailyLogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DailyLog' }],
    isAdmin: { type: Boolean }
})

module.exports = mongoose.model('User', userSchema);