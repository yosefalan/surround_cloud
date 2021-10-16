const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song, User, Album, Artist } = require('../../db/models');
const { singlePublicFileUpload, SingleMulterUpload } = require('../../awsS3')

const router = express.Router();




router.get('/', asyncHandler(async(req, res) => {
    const songs = await Song.findAll({
      include: [
        { model: Artist },
        { model: Album }
      ]
    });
    return res.json(songs);
  }));

  router.post('/upload', asyncHandler(async(req, res) => {
    const songs = await Song.findAll({
      include: [
        { model: Artist },
        { model: Album }
      ]
    });
    return res.json(songs);
  }));




module.exports = router;
