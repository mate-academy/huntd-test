'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('recruiter_profiles', 'city', {
      type: Sequelize.STRING, // Or another data type like INTEGER, BOOLEAN, etc.
      allowNull: true, // Customize as needed
      defaultValue: null, // Customize as needed
      // You can also add options like 'after' (MySQL only) or foreign key references
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('recruiter_profiles', 'city');
  }
};
