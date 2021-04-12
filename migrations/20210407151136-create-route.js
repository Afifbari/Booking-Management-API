"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Routes", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			route_name: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					is: ["[a-zA-Z-0-9 ]", "g"],
					isUppercase: true,
					len: [5, 20],
				},
			},
			fare: {
				type: Sequelize.INTEGER,
				validate: {
					isNumeric: true,
					min: 0,
				},
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
		await queryInterface.dropTable("Routes");
	},
};
