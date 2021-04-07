module.exports = (sequelize, DataTypes) => {
	const Route_Point = sequelize.define("Route_Point", {
		routeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: sequelize.models.Route,
				key: "id",
			},
		},
		pointId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: sequelize.models.Point,
				key: "id",
			},
		},
		startTime: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: sequelize.models.Time,
				key: "id",
			},
		},
	});

	Route_Point.belongsTo(sequelize.models.Route, {
		onDelete: "CASCADE",
		foreignKey: "routeId",
	});

	Route_Point.belongsTo(sequelize.models.Point, {
		foreignKey: "pointId",
		onDelete: "CASCADE",
	});

	return Route_Point;
};
