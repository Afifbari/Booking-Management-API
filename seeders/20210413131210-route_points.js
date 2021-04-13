"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Route_points",
			[
				{
					routeId: 1,
					pointId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					routeId: 1,
					pointId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					routeId: 1,
					pointId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					routeId: 2,
					pointId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					routeId: 2,
					pointId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					routeId: 2,
					pointId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					routeId: 3,
					pointId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					routeId: 3,
					pointId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Route_points", null, {});
	},
};
