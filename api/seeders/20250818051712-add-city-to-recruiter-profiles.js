'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Example: Update ALL existing rows to set a default city
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = 'Kyiv'
      WHERE id = 455;
    `);
  },

  async down(queryInterface, Sequelize) {
    // Revert the update
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = NULL
      WHERE city = 'Kyiv';
    `);
  }
};
