"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Routes",
			[
				{
					route_name: "BADDA-BANANI",
					fare: 150,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					route_name: "BADDA-BANANI",
					fare: 180,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					route_name: "RAMNA-UTTARA",
					fare: 180,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Routes", null, {});
	},
};
