const express = require("express");
const router = express.Router();

// Importing route related middlewares
const routeMiddlewares = require("../middlewares/routes");

// Get all routes
router.get("/", routeMiddlewares.getRoutes);

// Create a route
router.post("/create", routeMiddlewares.createRoute);

// // Update a route
// router.put("/update", routeMiddlewares.updateRoute);

// // Delete a route
// router.delete("/delete", routeMiddlewares.deleteRoute);

module.exports = router;
