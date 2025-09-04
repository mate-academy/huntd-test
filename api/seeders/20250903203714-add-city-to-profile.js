'use strict';

const TABLE_NAME = 'recruiter_profiles';
const EMAIL = 'andrii@mail.com';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const email = 'andrii@mail.com';

    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles rp
      SET city = 'Kyiv'
      WHERE rp.user_id = (SELECT id FROM users WHERE email = :email LIMIT 1)
    `, { replacements: { email } });
  },

  down: async (queryInterface, Sequelize) => {
    const email = 'andrii@mail.com';
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles rp
      SET city = NULL
      WHERE rp.user_id = (SELECT id FROM users WHERE email = :email LIMIT 1)
    `, { replacements: { email } });
  }
};
