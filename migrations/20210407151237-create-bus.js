"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Buses", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			bus_number: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					len: [4, 20],
					is: ["[a-zA-Z-0-9]", "g"],
				},
			},
			type: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					isAlpha: true,
				},
			},
			routeId: {
				type: Sequelize.INTEGER,
				references: {
					model: "routes",
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
		await queryInterface.dropTable("Buses");
	},
};
