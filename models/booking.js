module.exports = (sequelize, DataTypes) => {
	const Booking = sequelize.define("Booking", {
		routeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: sequelize.models.Route,
				key: "id",
			},
		},
		busTimeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: sequelize.models.Bus_Time,
				key: "id",
			},
		},
		passengerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: sequelize.models.Passenger,
				key: "id",
			},
		},
		driverId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: sequelize.models.Driver,
				key: "id",
			},
		},
		pickPoint: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: sequelize.models.Point,
				key: "id",
			},
		},
		dropPoint: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: sequelize.models.Point,
				key: "id",
			},
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		isComplete: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
		},
	});

	// Booking.belongsTo(sequelize.models.Route, {
	// 	foreignKey: "routeId",
	// 	onDelete: "SET NULL",
	// });

	// Booking.belongsTo(sequelize.models.Bus_Time, {
	// 	foreignKey: "busTimeId",
	// 	onDelete: "SET NULL",
	// });

	// Booking.belongsTo(sequelize.models.Passenger, {
	// 	foreignKey: "passengerId",
	// 	onDelete: "SET NULL",
	// });

	// Booking.belongsTo(sequelize.models.Driver, {
	// 	foreignKey: "driverId",
	// 	onDelete: "SET NULL",
	// });

	return Booking;
};
