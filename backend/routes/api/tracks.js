const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song, User, Album } = require('../../db/models');

const router = express.Router();

//GET api/:userId/


router.get('/', asyncHandler(async(req, res) => {
    const songs = await Song.findAll({
    });
    return res.json(songs);
  }));




module.exports = router;
