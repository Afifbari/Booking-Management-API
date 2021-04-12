const express = require("express");
const router = express.Router();

// Importing passenger related middlewares
const pointMiddlewares = require("../middlewares/points");

// Get all points
router.get("/", pointMiddlewares.getPoints);

// Create a point
router.post("/create", pointMiddlewares.createPoint);

// Update a point
router.put("/update", pointMiddlewares.updatePoint);

// Delete a point
router.delete("/delete", pointMiddlewares.deletePoint);

module.exports = router;
