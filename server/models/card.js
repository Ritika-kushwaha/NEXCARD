const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  name: String,
  jobTitle: String,
  company: String,
  email: String,
  phone: String,
  linkedin: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Card", CardSchema);
