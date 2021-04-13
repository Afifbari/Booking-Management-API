const express = require("express");
const router = express.Router();

// Importing passenger related middlewares
const bookingMiddlewares = require("../middlewares/bookings");

// Get all bookings
router.get("/", bookingMiddlewares.getAllBookings);

// Create a booking
router.post("/create", bookingMiddlewares.createBooking);

// Sort a booking
router.get("/sort", bookingMiddlewares.getAllBookingsDateSort);

module.exports = router;
