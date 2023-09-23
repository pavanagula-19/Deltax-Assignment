const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    sname: String, // Song name
    date: Date,
    artists: String, // Artist name or ID (you can adjust this based on your schema)
    artWork: {
      type: String,
      required: true
    },
});

const Song = mongoose.model("Song", songSchema);

module.exports = { Song };
