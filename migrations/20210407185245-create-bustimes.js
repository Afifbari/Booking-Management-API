"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Bus_times", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},

			busId: {
				type: Sequelize.INTEGER,
				references: {
					model: "bus",
					key: "id",
				},
				allowNull: false,
			},
			timeId: {
				type: Sequelize.INTEGER,
				references: {
					model: "time",
					key: "id",
				},
				allowNull: false,
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
		await queryInterface.dropTable("Bus_times");
	},
};
