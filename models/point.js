module.exports = (sequelize, DataTypes) => {
	const Point = sequelize.define("Point", {
		point_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				is: ["[a-zA-Z-0-9 ]", "g"],
				isUppercase: true,
				len: [3, 20],
			},
		},
	});

	return Point;
};
