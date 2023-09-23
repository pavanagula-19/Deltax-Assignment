// models/Song.js
const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateReleased: {
    type: Date,
    required: true,
  },
  artist: {
    type: String, // You can store the artist's name as a string for simplicity
    required: true,
  },
  artWork: {
    type: String, // Store the path to the uploaded artwork image
    required: true,
  },
});

module.exports = mongoose.model("Song", songSchema);
