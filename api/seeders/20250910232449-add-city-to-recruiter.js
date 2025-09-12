'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkUpdate('recruiter_profiles',
        {city: 'Cherkasy'},
        { id: 456}
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('recruiter_profiles',
        {city: null},
        { id: 456}
      );
  }
};
