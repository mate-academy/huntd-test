'use strict';

const TABLE_NAME = 'recruiter_profiles';
const COLUMN = 'city';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      { tableName: 'recruiter_profiles', schema: 'public' }, 
      COLUMN, 
      { type: Sequelize.STRING(255), allowNull: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn(
      { tableName: 'recruiter_profiles', schema: 'public' },
      COLUMN
    );
  }
};
