'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING(50)
  }, {});
  Artist.associate = function(models) {
    Artist.hasMany(models.Song, { foreignKey: 'artistId' });
    Artist.hasMany(models.Album, { foreignKey: 'artistId' });
  };
  return Artist;
};
