const express = require("express");
const router = express.Router();

// Importing passenger related middlewares
const busMiddlewares = require("../middlewares/buses");

// Get all passengers
router.get("/", busMiddlewares.getAllBuses);

// Create a passenger
router.post("/create", busMiddlewares.createBus);

module.exports = router;
