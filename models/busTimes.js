const Time = require("./time");

module.exports = (sequelize, DataTypes) => {
	const Bus_Time = sequelize.define("Bus_Time", {
		busId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: sequelize.models.Bus,
				key: "id",
			},
		},
		timeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: sequelize.models.Time,
				key: "id",
			},
		},
	});

	Bus_Time.belongsTo(sequelize.models.Bus, {
		as: "Bus",
		foreignKey: "busId",
	});

	Bus_Time.hasMany(sequelize.models.Booking, {
		foreignKey: "busTimeId",
		onDelete: "SET NULL",
	});

	return Bus_Time;
};
