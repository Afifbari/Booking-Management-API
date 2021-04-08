module.exports = (sequelize, DataTypes) => {
	const Route = sequelize.define("Route", {
		route_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				is: ["[a-zA-Z-0-9 ]", "g"],
				isUppercase: true,
				len: [5, 20],
			},
		},
		shotest_distance_km: {
			type: DataTypes.INTEGER,
			validate: {
				isNumeric: true,
			},
		},
		avg_time_minute: {
			type: DataTypes.INTEGER,
			validate: {
				isNumeric: true,
			},
		},
	});

	Route.hasMany(sequelize.models.Bus, {
		foreignKey: "routeId",
		onDelete: "SET NULL",
	});

	Route.belongsTo(sequelize.models.Point, {
		foreignKey: "startId",
		onDelete: "CASCADE",
	});

	Route.belongsTo(sequelize.models.Point, {
		foreignKey: "endId",
		onDelete: "CASCADE",
	});

	Route.hasMany(sequelize.models.Booking, {
		foreignKey: "routeId",
		onDelete: "SET NULL",
	});

	return Route;
};
