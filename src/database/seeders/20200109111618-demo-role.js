'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Roles',
      [
        {
          id: 'fce4fff4-4cb5-4281-b244-3b51afb25445',
          name: 'super admin',
          description: 'The boss himself',
        },
        {
          id: 'e4af43af-ca38-426b-a8ec-65a52a5a45fc',
          name: 'admin',
          description: 'The normal one',
        },
        {
          id: '32631050-9c4b-43a3-9fd1-4667a4847bef',
          name: 'owner',
          description: 'The boss himself',
        },
        {
          id: '8b96e00d-6c19-43d1-9596-267602c89023',
          name: 'manager',
          description: 'The normal one',
        },
        {
          id: '3142cd72-f683-429b-b2d0-acb8306ca9ab',
          name: 'volunteer',
          description: 'The boss himself',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
