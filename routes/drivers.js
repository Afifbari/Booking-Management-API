const express = require("express");
const router = express.Router();

// Importing passenger related middlewares
const driverMiddlewares = require("../middlewares/drivers");

// Get all drivers
router.get("/", driverMiddlewares.getDrivers);

// Create a driver
router.post("/create", driverMiddlewares.createDriver);

// Search all buses
router.post("/buses", driverMiddlewares.getBuses);

module.exports = router;
