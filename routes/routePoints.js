const express = require("express");
const router = express.Router();

// Importing route related middlewares
const routePointMiddlewares = require("../middlewares/routePoints");

// Get all route points
router.get("/", routePointMiddlewares.getRoutePoints);

// Create a route point
router.post("/create", routePointMiddlewares.createRoutePoint);

// Update a route point
router.put("/update", routePointMiddlewares.updateRoutePoint);

// Delete a route point
router.delete("/delete", routePointMiddlewares.deleteRoutePoint);

module.exports = router;
