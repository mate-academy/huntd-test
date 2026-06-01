'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      {'city': 'Zhytomyr'},
      {'city': null},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      {'city': null},
      {'city': 'Zhytomyr'},
    );
  }
};
