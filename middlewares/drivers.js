const { Driver } = require("../models");

// Get all drivers
exports.getDrivers = (req, res) => {
	Driver.findAll().then((drivers) => res.json({ drivers }));
};

// Create a driver
exports.createDriver = (req, res) => {
	const { name, phone, company } = req.body;

	Driver.create({
		name,
		phone,
		company,
	})
		.then((driver) => res.json({ driver }))
		.catch((err) => {
			res.json({ err: err.errors[0].message });
			console.log(err);
		});
};
