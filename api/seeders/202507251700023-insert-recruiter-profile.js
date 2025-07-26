'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const result  = await queryInterface.bulkUpdate('recruiter_profiles', 
      { city: 'Kyiv' }, 
      { id: 774 }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('recruiter_profiles', 
      { city: null }, 
      { id: 774 }
    );
  }
};
