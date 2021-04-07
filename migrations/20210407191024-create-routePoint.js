"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Route_points", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			routeId: {
				type: Sequelize.INTEGER,
				references: {
					model: "route",
					key: "id",
				},
				allowNull: false,
			},
			pointId: {
				type: Sequelize.INTEGER,
				references: {
					model: "point",
					key: "id",
				},
				allowNull: false,
			},
			startTime: {
				type: Sequelize.INTEGER,
				references: {
					model: "time",
					key: "id",
				},
				allowNull: true,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Route_points");
	},
};
