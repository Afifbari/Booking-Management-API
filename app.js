const express = require("express");
const db = require("./models");

// Route imports
const passengerRoutes = require("./routes/passengers");
const timeRoutes = require("./routes/times");
const pointRoutes = require("./routes/points");
const routeRoutes = require("./routes/routes");
const routePointRoutes = require("./routes/routePoints");

// Initializing express
const app = express();

// Body parser middleware - to read json body from post methods
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-------------------------------
//-------------------------------
// APIs

// Passenger
app.use("/passenger/", passengerRoutes);

// Time
app.use("/time/", timeRoutes);

// Point
app.use("/point/", pointRoutes);

// Route
app.use("/route/", routeRoutes);

// Route
app.use("/routePoint/", routePointRoutes);

db.sequelize.sync().then((req) => {
	app.listen(3000, () => {
		console.log("Database is connected.");
		console.log("Server is running.");
	});
});
