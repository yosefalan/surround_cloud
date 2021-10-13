'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      {
        userId: '1',
        artistId: '1',
        albumId: '1',
        url: 'https://surroundcloud.s3.us-east-2.amazonaws.com/Pink+Floyd+-+Dark+Side+of+the+Moon/Pink+Floyd+Time.mp3',
        title: 'Time',
      },

      {
        userId: '1',
        artistId: '2',
        albumId: '2',
        url: 'https://surroundcloud.s3.us-east-2.amazonaws.com/Tool+-+Aenima/TOOL+Jimmy.mp3',
        title: 'Jimmy',
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
