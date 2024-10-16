const mongoose = require('mongoose');

const CentreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  sports: [{ type: String }],
});

module.exports = mongoose.model('Centre', CentreSchema);
