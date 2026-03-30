'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Kyiv' },
      { id: 1 },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      { id: 1 },
    );
  },
};
