'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: '1',
        artistId: '1',
        title: 'Dark Side of the Moon',
        imageURL: 'https://i.imgur.com/AeSWZ1H.png'

      },

      {
        userId: '1',
        artistId: '2',
        title: 'Aenima',
        imageURL: 'https://i.imgur.com/jMRYWkE.png'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
