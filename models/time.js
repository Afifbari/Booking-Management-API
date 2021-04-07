module.exports = (sequelize, DataTypes) => {
	const Time = sequelize.define("Time", {
		time: {
			type: DataTypes.STRING,
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

	Time.hasMany(sequelize.models.Route_Point, {
		foreignKey: "startTime",
		onDelete: "SET NULL",
	});

	return Time;
};
