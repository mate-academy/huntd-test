'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const rEmail = 'recruiter@example.com';

    await queryInterface.bulkInsert('users', [{
      email: rEmail,
      first_name: 'Example',
      last_name: 'Recruiter',
      inactive: false,
      password: '123456',
      user_role: 'USER',
    }]);

    const userId = await queryInterface.rawSelect('users', {
        where: {
          email: rEmail,
        },
      },
      ['id']);

    await queryInterface.bulkInsert('recruiter_profiles', [{
      user_id: userId,
      status: 'ACTIVE',
      position: 'Recruiter',
      company_name: 'Example Recruitment',
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    const userId = await queryInterface.rawSelect('users', {
        where: {
          email: 'recruiter@example.com',
        },
      },
      ['id']);

    if (userId) {
      await queryInterface.bulkDelete('recruiter_profiles', {
        user_id: userId,
      });
      await queryInterface.bulkDelete('users', {
        id: userId,
      });
    }
  },
};
