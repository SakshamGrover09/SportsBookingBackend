const express = require('express');
const Booking = require('../models/Booking');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/slots', async (req, res) => {
  const { centreId, sport, date } = req.query;
  try {
    const allSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
    const bookings = await Booking.find({ centreId, sport, date });
    const bookedSlots = bookings.map(booking => booking.startTime);
    const availableSlots = allSlots.filter(slot => !bookedSlots.includes(slot));
    res.json(availableSlots);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching slots', error });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  const { centreId, sport, date, startTime, endTime } = req.body;
  try {
    const booking = new Booking({
      userId: req.user._id,
      centreId,
      sport,
      date,
      startTime,
      endTime,
      price: 1000,
    });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
});

router.get('/my-bookings', authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const upcomingBookings = await Booking.find({
      userId,
      date: { $gte: new Date().toISOString().split('T')[0] },
    }).sort({ date: 1 });
    const pastBookings = await Booking.find({
      userId,
      date: { $lt: new Date().toISOString().split('T')[0] },
    }).sort({ date: -1 });
    res.json({ upcoming: upcomingBookings, past: pastBookings });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
});

module.exports = router;
