'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    title: DataTypes.STRING(100)
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.User, { foreignKey: 'userId' });
    Song.belongsTo(models.Album, { foreignKey: 'albumId' });
    Song.hasMany(models.Comment, { foreignKey: 'songId' });
    Song.belongsTo(models.Artist, { foreignKey: 'artistId' });
  };
  return Song;
};
