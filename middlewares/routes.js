const { Route, Point, sequelize } = require("../models");

// Get all routes
exports.getRoutes = (req, res) => {
	Route.findAll().then((routes) => res.json({ routes }));
};

// Create a route
exports.createRoute = async (req, res) => {
	const { startId, endId, fare } = req.body;

	if (!startId || !endId) {
		return res.json({ msg: "Please enter both startId & endId." });
	}

	let startObject = await Point.findOne({ where: { id: startId } });
	let endObject = await Point.findOne({ where: { id: endId } });

	if (!startObject) {
		return res.json({
			msg: "Please enter correct startId.",
		});
	}

	if (!endObject) {
		return res.json({
			msg: "Please enter correct endId.",
		});
	}

	if (
		fare === undefined ||
		fare.length === 0 ||
		!Number.isInteger(parseInt(fare))
	) {
		return res.json({
			msg: "Please enter correct fare.",
		});
	}

	let exists = await Route.findOne({
		where: {
			route_name: startObject.point_name + "-" + endObject.point_name,
		},
	});

	if (exists) {
		return res.json({ msg: "The route already exists." });
	}

	Route.create({
		startId: startObject.id,
		endId: endObject.id,
		route_name: startObject.point_name + "-" + endObject.point_name,
		fare: parseInt(fare),
	})
		.then((route) => res.json({ route }))
		.catch((err) => {
			console.log(err);
			res.json({
				msg: "Error occured while saving route in database.",
			});
		});
};

// Update a route
exports.updateRoute = async (req, res) => {
	const { id, fare } = req.body;

	if (
		fare === undefined ||
		fare.length === 0 ||
		!Number.isInteger(parseInt(fare))
	) {
		return res.json({
			msg: "Please enter correct fare.",
		});
	}

	let routeObject = await Route.findOne({ where: { id } });

	if (routeObject) {
		Route.update(
			{
				fare,
			},
			{
				where: {
					id,
				},
			}
		)
			.then((data) => res.json({ msg: "Route updated." }))
			.catch((err) => {
				console.log(err);
				res.json({
					msg: "Error occured while updating route in database.",
				});
			});
	} else {
		res.json({ msg: "There is no such route ID." });
	}
};

// Delete a route
exports.deleteRoute = async (req, res) => {
	const { id } = req.body;

	let routeObject = await Route.findOne({ where: { id } });

	if (routeObject) {
		Route.destroy({
			where: {
				id,
			},
		})
			.then((data) => res.json({ msg: "Route deleted." }))
			.catch((err) => {
				console.log(err);
				res.json({
					msg: "Error occured while deleting route in database.",
				});
			});
	} else {
		res.json({ msg: "There is no such route ID." });
	}
};
