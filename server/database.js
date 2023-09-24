const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the MongoDB database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
