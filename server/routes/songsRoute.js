const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Song } = require("../models/songsSchema");
const cloudinary = require("cloudinary").v2; // Import Cloudinary
const { CloudinaryStorage } = require("multer-storage-cloudinary"); // Import Cloudinary storage for Multer

// Configure Cloudinary (replace with your own credentials from .env)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer to handle file uploads using Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'song-artwork', // Replace with your desired folder name
    resource_type: 'auto',
  },
});

const upload = multer({ storage });

// Define a route for creating a new song
router.post("/", upload.single("artWork"), async (req, res) => {
  try {
    // Access other form data
    const { sname, date, artists } = req.body;

    // Access the Cloudinary image URL from the uploaded file
    const artWorkUrl = req.file.path;

    // Create a new song document with the Cloudinary image URL
    const song = new Song({
      sname,
      date, // Make sure 'date' corresponds to the date of release
      artists,
      artWork: artWorkUrl, // Store the Cloudinary URL
    });

    // Save the song to the database
    await song.save();

    res.status(201).json(song);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
    try {
      // Retrieve all songs from the database
      const songs = await Song.find();
  
      res.status(200).json(songs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

router.delete("/", async (req, res) => {
    try {
      // Delete all songs from the database
      await Song.deleteMany({});
  
      res.status(204).json({ message: "All songs deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

// Export the router
module.exports = router;
