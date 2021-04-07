const express = require("express");
const router = express.Router();

// Importing passenger related middlewares
const passengerMiddlewares = require("../middlewares/passengers");

// Get all passengers
router.get("/", passengerMiddlewares.getPassengers);

// Create a passenger
router.post("/create", passengerMiddlewares.createPassenger);

module.exports = router;
