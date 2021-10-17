const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song, User, Album, Artist } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const tracks = await Song.findAll({
      include: [
        { model: Artist },
        { model: Album }
      ]
    });
    return res.json(tracks);
  }));


  router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
       const track = await Song.findByPk(req.params.id)
    // const track = await Song.findByPk((req.params.id),
    //   {
    //   include: [
    //     { model: Artist },
    //     { model: Album }
    //   ]
    // });
    return res.json(track);
  }));


  router.post(
    "/upload",
    singleMulterUpload("file"),
    asyncHandler(async (req, res) => {
      const {
        title,
        artist,
        album,
        art,
        url,
      } = req.body;
      const song = await Song.create({
        title,
        artist,
        album,
        art,
        url,
      });

      return res.json({
        song,
      });
    })
  );












module.exports = router;
