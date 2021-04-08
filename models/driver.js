module.exports = (sequelize, DataTypes) => {
	const Driver = sequelize.define("Driver", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				isAlpha: true,
				len: [3, 20],
			},
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				is: ["[0-9]", "g"],
			},
		},
		company_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});

	Driver.hasMany(sequelize.models.Booking, {
		foreignKey: "driverId",
		onDelete: "SET NULL",
	});

	Driver.hasOne(sequelize.models.Bus, {
		foreignKey: "driverId",
		onDelete: "SET NULL",
	});

	return Driver;
};
