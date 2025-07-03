const express = require("express");    // Import Express
const mongoose = require("mongoose");  // Import Mongoose
const cors = require("cors");          // Allow frontend/backend to talk
require("dotenv").config();            // Load environment variables

const app = express();                 // Create app
const PORT = process.env.PORT || 5000; // Use .env port or default

app.use(cors());                       // Allow cross-origin requests
app.use(express.json());              // Parse incoming JSON requests

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {console.log('Server running on port ${PORT}')});
  })
  .catch((err) => console.log(err));
