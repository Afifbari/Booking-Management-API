const { Passenger } = require("../models");

// Get all passengers
exports.getPassengers = (req, res) => {
	Passenger.findAll().then((passengers) => res.json({ passengers }));
};

// Create a passenger
exports.createPassenger = (req, res) => {
	const { firstName, lastName, email, phone, company } = req.body;

	Passenger.create({
		first_name: firstName,
		last_name: lastName,
		email,
		phone,
		company,
	})
		.then((passenger) => res.json({ passenger }))
		.catch((err) => console.log(err));
};
