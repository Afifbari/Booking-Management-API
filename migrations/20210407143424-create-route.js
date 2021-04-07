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
				unique: true,
				validate: {
					notEmpty: true,
					is: ["[a-zA-z-0-9 ]", "g"],
					isUppercase: true,
					len: [5, 20],
				},
			},
			start: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					is: ["[a-zA-z-0-9 ]", "g"],
					isUppercase: true,
					len: [3, 20],
				},
			},
			end: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					is: ["[a-zA-z-0-9 ]", "g"],
					isUppercase: true,
					len: [3, 20],
				},
			},
			shotest_distance_km: {
				type: Sequelize.INTEGER,
				validate: {
					isNumeric: true,
				},
			},
			avg_time_minute: {
				type: Sequelize.INTEGER,
				validate: {
					isNumeric: true,
				},
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Routes");
	},
};
