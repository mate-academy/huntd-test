'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Kyiv' },
      { id: 456 } // ID of the created recruiter profile
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      { id: 456 }
    );
  }
};
