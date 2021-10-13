const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song, User } = require('../../db/models');

const router = express.Router();

//GET api/:userId/
router.get('/discover', asyncHandler(async(req, res) => {
    const songs = await Song.findAll({
    });

    return res.json(songs);
  }));

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});


module.exports = router;
