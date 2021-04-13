module.exports = (sequelize, DataTypes) => {
	const Passenger = sequelize.define("Passenger", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				isAlpha: true,
				len: [3, 20],
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				isEmail: true,
				isLowercase: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			// allowNull: false,
			// validate: {
			// 	notEmpty: true,
			// },
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
		company: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});

	Passenger.hasMany(sequelize.models.Booking, {
		foreignKey: "passengerId",
		onDelete: "SET NULL",
	});

	return Passenger;
};
