"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Buses",
			[
				{
					bus_number: "BADDA",
					name: "turag",
					type: "volvo",
					routeId: 2,
					driverId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					bus_number: "BADDA",
					name: "turag",
					type: "volvo",
					routeId: 1,
					driverId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					bus_number: "BADDA",
					name: "turag",
					type: "volvo",
					routeId: 3,
					driverId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Buses", null, {});
	},
};
