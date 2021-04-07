"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Drivers", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			first_name: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					isAlpha: true,
					len: [3, 20],
				},
			},
			last_name: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					isAlpha: true,
					len: [3, 20],
				},
			},
			phone: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: true,
					is: ["[0-9]", "g"],
				},
			},
			company: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Drivers");
	},
};