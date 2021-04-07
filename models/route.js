module.exports = (sequelize, DataTypes) => {
	const Route = sequelize.define("Route", {
		route_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				is: ["[a-zA-z-0-9 ]", "g"],
				isUppercase: true,
				len: [5, 20],
			},
		},
		start: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				is: ["[a-zA-z-0-9 ]", "g"],
				isUppercase: true,
				len: [3, 20],
			},
		},
		end: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				is: ["[a-zA-z-0-9 ]", "g"],
				isUppercase: true,
				len: [3, 20],
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

	return Route;
};
