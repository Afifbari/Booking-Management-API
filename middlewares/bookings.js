const { date } = require("joi");
const {
	Booking,
	Bus,
	Route,
	Driver,
	Bus_Time,
	Passenger,
	Point,
} = require("../models");

// Get all bookings
exports.getAllBookings = (req, res) => {
	Booking.finAll().then((bookings) => res.json({ bookings }));
};

// Create a booking
exports.createBooking = async (req, res) => {
	const { busTimeId, passengerId, date } = req.body;

	let busTimeObject = await Bus_Time.findOne({
		where: { id: busTimeId },
	});
	let passengerObject = await Passenger.findOne({
		where: { id: passengerId },
	});

	if (!busTimeObject || !passengerObject) {
		return res.json({
			msg: "Invalid bus-time/passenger selection.",
		});
	}

	let busObject = await Bus.findOne({
		where: { id: busTimeObject.busId },
	});
	console.log(busObject);

	try {
		let routeObject = await Route.findOne({
			where: { id: busObject.routeId },
		});
		console.log(routeObject);
		let driverObject = await Driver.findOne({
			where: { id: busObject.driverId },
		});
		console.log(driverObject);

		let pickPoint = routeObject.route_name.split("-")[0];
		console.log(pickPoint);
		let dropPoint = routeObject.route_name.split("-")[1];
		console.log(dropPoint);

		let pickPointObject = await Point.findOne({
			where: { point_name: pickPoint },
		});
		console.log(pickPointObject);
		let dropPointObject = await Point.findOne({
			where: { point_name: dropPoint },
		});
		console.log(dropPointObject);

		let bookingObject = await Booking.create({
			routeId: routeObject.id,
			busTimeId,
			passengerId,
			driverId: driverObject.id,
			pickPoint: pickPointObject.id,
			dropPoint: dropPointObject.id,
			date,
			isCompleted: false,
		});

		console.log(bookingObject);

		res.json({ bookingObject });
	} catch (error) {
		res.json({ error });
	}
};

// Get passenger booking
exports.getAllBookings = (req, res) => {
	const { passengerId } = req.body;

	Booking.findAll({ where: { passengerId } }).then((bookings) =>
		res.json({ bookings })
	);
};

// Sort passenger booking according to date
exports.getAllBookingsDateSort = (req, res) => {
	const { passengerId } = req.body;

	Booking.findAll({
		where: { passengerId },
		order: [["date", "ASC"]],
	}).then((bookings) => res.json({ bookings }));
};

// Cancel Booking
exports.cancelBooking = async (req, res) => {
	const { bookingId, passengerId } = req.body;

	let bookingObject = await Point.findOne({
		where: { id: bookingId },
	});

	if (bookingObject) {
		Booking.destroy({
			where: {
				id: bookingId,
			},
		})
			.then((data) => res.json({ msg: "Booking deleted." }))
			.catch((err) => {
				console.log(err);
				res.json({
					msg: "Error occured while deleting booking in database.",
				});
			});
	} else {
		res.json({ msg: "There is no such booking ID." });
	}
};
