"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Passengers",
			[
				{
					name: "John",
					email: "john@demo.com",
					phone: "012345",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Don",
					email: "don@demo.com",
					phone: "012789",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Under",
					email: "under@demo.com",
					phone: "012123",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Edge",
					email: "edge@demo.com",
					phone: "123345",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Jerry",
					email: "jerry@demo.com",
					phone: "123445",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Passengers", null, {});
	},
};
