module.exports = (sequelize, DataTypes) => {
	const Time = sequelize.define("Time", {
		time: {
			type: DataTypes.TIME,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				len: [4, 10],
				is: ["[A-Z:0-9 ]", "g"],
			},
		},
	});

	Time.hasMany(sequelize.models.Bus_Time, {
		foreignKey: "timeId",
		onDelete: "CASCADE",
	});

	Time.hasMany(sequelize.models.Booking, {
		foreignKey: "pickPoint",
		onDelete: "SET NULL",
	});

	Time.hasMany(sequelize.models.Booking, {
		foreignKey: "dropPoint",
		onDelete: "SET NULL",
	});

	return Time;
};
