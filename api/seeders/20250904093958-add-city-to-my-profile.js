'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Kyiv' },
      { id: 456 }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      { id: 456 }
    );
  }
};
