const { Point, sequelize } = require("../models");

// Get all points
exports.getPoints = (req, res) => {
	Point.findAll().then((points) => res.json({ points }));
};

// Create a point
exports.createPoint = (req, res) => {
	const { point_name } = req.body;

	Point.create({
		point_name: point_name.toUpperCase(),
	})
		.then((point) => res.json({ point }))
		.catch((err) => {
			console.log(err);
			res.json({
				msg: "Error occured while saving point in database.",
			});
		});
};

// Update a point
exports.updatePoint = async (req, res) => {
	const { id, point_name } = req.body;

	let pointObject = await Point.findOne({ where: { id } });

	if (pointObject) {
		Point.update(
			{
				point_name: point_name.toUpperCase(),
			},
			{
				where: {
					id,
				},
			}
		)
			.then((data) => res.json({ msg: "Point updated." }))
			.catch((err) => {
				console.log(err);
				res.json({
					msg: "Error occured while updating point in database.",
				});
			});
	} else {
		res.json({ msg: "There is no such point ID." });
	}
};

// Delete a point
exports.deletePoint = async (req, res) => {
	const { id } = req.body;

	let pointObject = await Point.findOne({ where: { id } });

	if (pointObject) {
		Point.destroy({
			where: {
				id,
			},
		})
			.then((data) => res.json({ msg: "Point deleted." }))
			.catch((err) => {
				console.log(err);
				res.json({
					msg: "Error occured while deleting point in database.",
				});
			});
	} else {
		res.json({ msg: "There is no such point ID." });
	}
};
