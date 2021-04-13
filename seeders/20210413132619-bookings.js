"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Bookings",
			[
				{
					routeId: 1,
					busTimeId: 2,
					passengerId: 1,
					driverId: 2,
					pickPoint: 1,
					dropPoint: 4,
					date: new Date("12-03-2021"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					routeId: 3,
					busTimeId: 3,
					passengerId: 1,
					driverId: 1,
					pickPoint: 2,
					dropPoint: 5,
					date: new Date("12-24-2021"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					routeId: 2,
					busTimeId: 1,
					passengerId: 1,
					driverId: 3,
					pickPoint: 1,
					dropPoint: 4,
					date: new Date("12-14-2021"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Bookings", null, {});
	},
};
