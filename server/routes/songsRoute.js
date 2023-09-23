// routes/songsRoute.js
const express = require("express");
const router = express.Router();
const multer = require("multer"); // Use Multer for file uploads
const path = require("path");
const Song = require("../models/songsSchema");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Create unique filenames
  },
});

const upload = multer({ storage });

// Route to create a new song
router.post("/", upload.single("artWork"), async (req, res) => {
  try {
    const { name, dateReleased, artist } = req.body;
    const artWork = req.file ? req.file.filename : null; // Store the uploaded filename in the database

    const newSong = new Song({
      name,
      dateReleased,
      artist,
      artWork,
    });

    await newSong.save();
    res.status(201).json({ message: "Song created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
