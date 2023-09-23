const express = require("express");
const app = express();
const cors = require("cors"); // Import the cors middleware
const dotenv = require("dotenv");
dotenv.config();
const connectDatabase = require("./database");

connectDatabase();

// Use the cors middleware
app.use(cors());

// Import artist routes
const artistsRouter = require("./routes/artistsRoute");

// Middleware to parse JSON requests
app.use(express.json());

// Use artist routes
app.use("/artists", artistsRouter);
const songsRouter = require("./routes/songsRoute");
app.use("/songs", songsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
