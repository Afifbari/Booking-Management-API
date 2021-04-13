const express = require("express");
const router = express.Router();

// Importing passenger related middlewares
const driverMiddlewares = require("../middlewares/drivers");

// Get all drivers
router.get("/", driverMiddlewares.getDrivers);

// Create a driver
router.post("/create", driverMiddlewares.createDriver);

// Login driver
router.post("/login", driverMiddlewares.login);

// Search all buses
router.get("/buses", driverMiddlewares.getBuses);

module.exports = router;
