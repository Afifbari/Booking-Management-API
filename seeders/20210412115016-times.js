"use strict";
const moment = require("moment");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Times",
			[
				{
					time: moment("9:00 PM", "HH:mm a").format("HH:mm:ss"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					time: moment("10:00 PM", "HH:mm a").format("HH:mm:ss"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					time: moment("8:00 am", "HH:mm a").format("HH:mm:ss"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					time: moment("12:00 PM", "HH:mm a").format("HH:mm:ss"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Times", null, {});
	},
};
