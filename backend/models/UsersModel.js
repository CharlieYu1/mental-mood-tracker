const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    email: { type: String, required: true, unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format',
        },
    },
    activityLogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ActivityLog' }]
    moodLogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MoodLog' }],
    isAdmin: { type: Boolean }
})

module.exports = mongoose.model('User', userSchema);