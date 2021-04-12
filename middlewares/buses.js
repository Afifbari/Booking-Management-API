const { Bus, Route, Time, Driver, Bus_Time } = require("../models");

// Get all buses
exports.getAllBuses = (req, res) => {
	Bus.finAll().then((buses) => res.json({ buses }));
};

// Create a bus
exports.createBus = async (req, res) => {
	const {
		bus_number,
		name,
		type,
		routeId,
		driverId,
		timeId,
	} = req.body;

	let routeExits = await Route.findOne({ where: { id: routeId } });
	let driverExits = await Driver.findOne({
		where: { id: driverId },
	});
	let timeExits = await Time.findOne({ where: { id: timeId } });

	if (!routeExits || !timeExits || !driverExits) {
		return res.json({ msg: "Invalid route/time/driver selection." });
	}

	try {
		let busObject = await Bus.create({
			bus_number,
			name,
			type,
			routeId,
			driverId,
		});

		let busTimeObject = Bus_Time.create({
			busId: busObject.id,
			timeId: timeId,
		});

		console.log(busTimeObject);

		res.json({ busObject });
	} catch (error) {
		res.json({ error });
	}
};
