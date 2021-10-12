'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Albums', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING(100),
    imageURL: DataTypes.STRING
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User, { foreignKey: 'userId' });
    Album.hasMany(models.Song, { foreignKey: 'albumId' });
  };
  return Album;
};
