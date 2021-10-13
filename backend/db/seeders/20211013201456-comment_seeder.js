'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: '1',
        songId: '1',
        body: 'Best freaking song ever!',

      },

      {
        userId: '1',
        songId: '2',
        body: 'Such a good song!',
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
