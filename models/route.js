module.exports = (sequelize, DataTypes) => {
	const Route = sequelize.define("Route", {
		route_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				is: ["[a-zA-Z-0-9 ]", "g"],
				isUppercase: true,
				len: [5, 100],
			},
		},
		fare: {
			type: DataTypes.INTEGER,
			validate: {
				isNumeric: true,
				min: 0,
			},
		},
	});

	// Route.belongsTo(sequelize.models.Point, {
	// 	foreignKey: "startId",
	// 	onDelete: "CASCADE",
	// });

	// Route.belongsTo(sequelize.models.Point, {
	// 	foreignKey: "endId",
	// 	onDelete: "CASCADE",
	// });

	Route.hasMany(sequelize.models.Bus, {
		foreignKey: "routeId",
		onDelete: "SET NULL",
	});

	Route.hasMany(sequelize.models.Booking, {
		foreignKey: "routeId",
		onDelete: "SET NULL",
	});

	return Route;
};
