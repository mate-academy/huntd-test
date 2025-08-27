module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles AS recruiter_profiles
      SET city = 'Kyiv'
      FROM users AS users
      WHERE recruiter_profiles.user_id = users.id
        AND users.email = 'azartofgod@gmail.com'
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles AS recruiter_profiles
      SET city = NULL
      FROM users AS users
      WHERE recruiter_profiles.user_id = users.id
        AND users.email = 'azartofgod@gmail.com'
    `);
  },
};
