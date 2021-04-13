"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Points",
			[
				{
					point_name: "BADDA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					point_name: "RAMNA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					point_name: "GULSHAN",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					point_name: "BANANI",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					point_name: "UTTARA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Points", null, {});
	},
};
