const express = require('express');
const Centre = require('../models/Centre');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const centres = await Centre.find();
    res.json(centres);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching centres', error });
  }
});

module.exports = router;
