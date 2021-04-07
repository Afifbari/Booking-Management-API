const express = require("express");
const db = require("./models");

// Route imports
const passengerRoutes = require("./routes/passengers");

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

db.sequelize.sync().then((req) => {
	app.listen(3000, () => {
		console.log("Database is connected.");
		console.log("Server is running.");
	});
});
