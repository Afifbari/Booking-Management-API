"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Bus_times",
			[
				{
					busId: 1,
					timeId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					busId: 2,
					timeId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					busId: 3,
					timeId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Bus_times", null, {});
	},
};
