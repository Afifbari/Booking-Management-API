const express = require("express");
const router = express.Router();

// Importing passenger related middlewares
const driverMiddlewares = require("../middlewares/drivers");

// Get all passengers
router.get("/", driverMiddlewares.getDrivers);

// Create a passenger
router.post("/create", driverMiddlewares.createDriver);

module.exports = router;
