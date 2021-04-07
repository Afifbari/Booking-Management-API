module.exports = (sequelize, DataTypes) => {
	const Driver = sequelize.define("Driver", {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				isAlpha: true,
				len: [3, 20],
			},
		},
		last_name: {
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

	return Driver;
};
