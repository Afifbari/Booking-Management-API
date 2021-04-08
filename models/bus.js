module.exports = (sequelize, DataTypes) => {
	const Bus = sequelize.define("Bus", {
		bus_number: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				len: [4, 20],
				is: ["[a-zA-Z-0-9]", "g"],
			},
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				len: [4, 20],
				is: ["[a-zA-Z-0-9 ]", "g"],
			},
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				isAlpha: true,
			},
		},
	});

	return Bus;
};
