const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song, User, Album, Artist } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')

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

  router.post(
    "/upload",
    singleMulterUpload("track"),
    asyncHandler(async (req, res) => {
      const {
        title,
        artist,
        url,
        album,
        art,
        track,
      } = req.body;
      const user = await User.uploadTrack({
        title,
        artist,
        url,
        album,
        art,
        track,
      });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    })
  );












module.exports = router;
