"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Drivers",
			[
				{
					name: "Khaled",
					phone: "012345",
					company: "turag",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Selim",
					phone: "012789",
					company: "raida",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Akkas",
					phone: "012123",
					company: "jatri",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Mamun",
					phone: "123345",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Kalam",
					phone: "123445",
					company: "bihongo",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Drivers", null, {});
	},
};
