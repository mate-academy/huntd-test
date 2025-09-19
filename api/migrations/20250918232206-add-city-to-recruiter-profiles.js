module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('recruiter_profiles', 'city', Sequelize.DataTypes.STRING);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('recruiter_profiles', 'city');
  },
};
