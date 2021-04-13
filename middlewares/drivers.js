const { Driver } = require("../models");
const {
	Passenger,
	Route,
	Route_Point,
	Point,
	Bus,
	Bus_Time,
	Time,
	Booking,
} = require("../models");

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

// See driver bookings
exports.getBookings = async (req, res) => {
	const { driverId } = req.body;

	const bookings = await Booking.findAll({ where: { driverId } });

	res.json({ bookings });
};

// See driver buses
exports.getBuses = async (req, res) => {
	const { driverId } = req.body;

	const busObjects = await Bus.findAll({ where: { driverId } });

	let buses = [];

	for (const bus of busObjects) {
		const routeObject = await Route.findOne({
			where: { id: bus.routeId },
		});
		const busTimeObject = await Bus_Time.findOne({
			where: { busId: bus.id },
		});
		const timeObject = await Time.findOne({
			where: { id: busTimeObject.timeId },
		});

		let busDetials = {
			bus_name: bus.name,
			number: bus.bus_number,
			route: routeObject.route_name,
			startingTime: timeObject.time,
		};

		buses.push(busDetials);
	}

	res.json({ buses });
};
