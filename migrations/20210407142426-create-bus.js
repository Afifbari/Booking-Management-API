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
					is: ["[a-zA-z-0-9]", "g"],
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
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Buses");
	},
};
