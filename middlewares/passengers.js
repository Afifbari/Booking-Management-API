const { Passenger } = require("../models");

// Get all passengers
exports.getPassengers = (req, res) => {
	Passenger.findAll().then((passengers) => res.json({ passengers }));
};

// Create a passenger
exports.createPassenger = (req, res) => {
	const { name, email, phone, company } = req.body;

	Passenger.create({
		name,
		email,
		phone,
		company,
	})
		.then((passenger) => res.json({ passenger }))
		.catch((err) => console.log(err));
};
