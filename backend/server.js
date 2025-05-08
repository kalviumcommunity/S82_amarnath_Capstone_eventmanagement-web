const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);  // Authentication Routes
app.use('/api/events', eventRoutes); // Event Routes
app.use('/api/tickets', ticketRoutes); // Ticket Routes
// Global Error Handler (keep at the end)
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  });
  
  // Connect to MongoDB and start server
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
      app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}`);
      });
    })
    .catch((err) => {
      console.error("MongoDB connection failed", err);
    });