const { Route_Point, Route, Point, sequelize } = require("../models");

// Get all route points
exports.getRoutePoints = (req, res) => {
	Route_Point.findAll().then((routePoints) =>
		res.json({ routePoints })
	);
};

// Create a route point
exports.createRoutePoint = async (req, res) => {
	const { routeId, pointId } = req.body;

	if (!routeId || !pointId) {
		return res.json({ msg: "Please enter both routeId & pointId." });
	}

	let exists = await Route_Point.findOne({
		where: {
			routeId,
			pointId,
		},
	});

	if (exists) {
		return res.json({ msg: "The route point already exists." });
	}

	let routeExists = await Route.findOne({
		where: {
			id: routeId,
		},
	});

	let pointExists = await Point.findOne({
		where: {
			id: pointId,
		},
	});

	if (!routeExists) {
		return res.json({ msg: "The routeId doesn't exist." });
	}

	if (!pointExists) {
		return res.json({ msg: "The pointId doesn't exist." });
	}

	Route_Point.create({
		routeId,
		pointId,
	})
		.then((routePoint) => res.json({ routePoint }))
		.catch((err) => {
			console.log(err);
			res.json({
				msg: "Error occured while saving route point in database.",
			});
		});
};

// Update a route point
exports.updateRoutePoint = async (req, res) => {
	const { id, routeId, pointId } = req.body;

	let routePointObject = await Route_Point.findOne({ where: { id } });

	if (routePointObject) {
		Route_Point.update(
			{
				routeId,
				pointId,
			},
			{
				where: {
					id,
				},
			}
		)
			.then((data) => res.json({ msg: "Route point updated." }))
			.catch((err) => {
				console.log(err);
				res.json({
					msg:
						"Error occured while updating route point in database.",
				});
			});
	} else {
		res.json({ msg: "There is no such route point ID." });
	}
};

// Delete a route point
exports.deleteRoutePoint = async (req, res) => {
	const { id } = req.body;

	let routePointObject = await Route_Point.findOne({ where: { id } });

	if (routePointObject) {
		Route_Point.destroy({
			where: {
				id,
			},
		})
			.then((data) => res.json({ msg: "Route point deleted." }))
			.catch((err) => {
				console.log(err);
				res.json({
					msg:
						"Error occured while deleting route point in database.",
				});
			});
	} else {
		res.json({ msg: "There is no such route point ID." });
	}
};
