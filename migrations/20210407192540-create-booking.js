"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Bookings", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			routeId: {
				type: Sequelize.INTEGER,
				references: {
					model: "routes",
					key: "id",
				},
				allowNull: true,
			},
			busTimeId: {
				type: Sequelize.INTEGER,
				references: {
					model: "bus_times",
					key: "id",
				},
				allowNull: true,
			},
			passengerId: {
				type: Sequelize.INTEGER,
				references: {
					model: "passengers",
					key: "id",
				},
				allowNull: true,
			},
			driverId: {
				type: Sequelize.INTEGER,
				references: {
					model: "drivers",
					key: "id",
				},
				allowNull: true,
			},
			pickPoint: {
				type: Sequelize.INTEGER,
				references: {
					model: "points",
					key: "id",
				},
				allowNull: true,
			},
			dropPoint: {
				type: Sequelize.INTEGER,
				references: {
					model: "points",
					key: "id",
				},
				allowNull: true,
			},
			date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			isCompleted: {
				type: Sequelize.BOOLEAN,
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
		await queryInterface.dropTable("Bookings");
	},
};
