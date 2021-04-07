"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Points", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			point_name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: true,
					is: ["[a-zA-Z-0-9 ]", "g"],
					isUppercase: true,
					len: [3, 20],
				},
			},
			city: {
				type: Sequelize.STRING,
				validate: {
					is: ["[a-zA-Z]", "g"],
					isUppercase: true,
					len: [3, 20],
				},
			},
			thana: {
				type: Sequelize.STRING,
				validate: {
					is: ["[a-zA-Z]", "g"],
					isUppercase: true,
					len: [3, 20],
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
		await queryInterface.dropTable("Points");
	},
};
