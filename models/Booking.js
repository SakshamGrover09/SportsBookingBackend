const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  centreId: { type: String, required: true },
  sport: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  price: { type: Number, default: 1000 },
});

module.exports = mongoose.model('Booking', BookingSchema);
