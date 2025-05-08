const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['organizer', 'attendee'], default: 'attendee' },
  isVerified: { type: Boolean, default: false },
  otp: String,
  otpExpires: Date
});

module.exports = mongoose.model('User', userSchema);
