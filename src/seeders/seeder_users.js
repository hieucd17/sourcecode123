"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        firstName: "Hiếu",
        lastName: "JS",
        passWord: "123456",
        address: "Thái Bình",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        phoneNumber: "0348078425",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
