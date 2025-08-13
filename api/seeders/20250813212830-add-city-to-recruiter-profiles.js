module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Vinnytsia' },
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      {},
    );
  },
};
