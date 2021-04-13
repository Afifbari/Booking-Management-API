const {
	Passenger,
	Route,
	Route_Point,
	Point,
	Bus,
	Bus_Time,
	Time,
} = require("../models");

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

//---------------------------------
// Search middlewares

// Route search
exports.searchRoute = async (req, res) => {
	const { pickPointId, dropPointId } = req.body;

	let routes = [];

	let pickPointObject = await Point.findOne({
		where: { id: pickPointId },
	});
	let dropPointObject = await Point.findOne({
		where: { id: dropPointId },
	});

	let routeName =
		pickPointObject.point_name + "-" + dropPointObject.point_name;

	let routeObjects = await Route.findAll({
		where: { route_name: routeName },
	});

	for (const route of routeObjects) {
		let routePoints = await Route_Point.findAll({
			where: { routeId: route.id },
		});
		let busObjects = await Bus.findAll({
			where: { routeId: route.id },
		});

		let routeBuses = [];

		for (const bus of busObjects) {
			let busTimeObject = await Bus_Time.findOne({
				where: { busId: bus.id },
			});
			let timeObject = await Time.findOne({
				where: { id: busTimeObject.timeId },
			});

			let busDetail = {
				busName: bus.name,
				startingTime: timeObject.time,
			};

			routeBuses.push(busDetail);
		}

		let totalRoute = "";

		for (const [index, routePoint] of routePoints.entries()) {
			let pointObject = await Point.findOne({
				where: { id: routePoint.pointId },
			});

			totalRoute = totalRoute + pointObject.point_name;

			if (index != routePoints.length - 1) {
				totalRoute = totalRoute + "-";
			}
		}

		let routeDetails = {
			totalRoute: totalRoute,
			fare: route.fare,
			routeBuses,
		};

		routes.push(routeDetails);
	}

	if (routes.length === 0) {
		return res.json({ msg: "No such route is present." });
	}

	res.json({ routes });
};

// Search
