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
		fare: {
			type: DataTypes.INTEGER,
			validate: {
				isNumeric: true,
				min: 0,
			},
		},
	});

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
