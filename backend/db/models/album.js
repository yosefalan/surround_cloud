'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING(100),
    imageURL: DataTypes.STRING
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User, { foreignKey: 'userId' });
    Album.belongsTo(models.Artist, { foreignKey: 'artistId' });
    Album.hasMany(models.Song, { foreignKey: 'albumId' });
  };
  return Album;
};
