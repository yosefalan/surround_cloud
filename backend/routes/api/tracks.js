const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song, User, Album, Artist, Comment } = require('../../db/models');
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
      //  const track = await Song.findByPk(req.params.id)
    const track = await Song.findByPk((req.params.id),
      {
      include: [
        { model: Artist },
        { model: Album },
        { model: Comment},
        { model: User},
      ]
    });
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

  router.get(
    '/:id(\\d+)/comments',
    asyncHandler(async(req, res) => {
      const songId = req.params.id
      const comments = await Comment.findAll({
    where: {
      songId: songId
    },
    include: [{
      model: User
    }]
  })
  return res.json(comments);
}));

  router.post(
  '/:id(\\d+)/comments/post',
  asyncHandler(async(req, res) => {
    console.log("BACKEND: ********")
    const { content } = req.body;
    const songId = req.params.id;
    const userId = req.user.id;
    const comments = await Comment.create({
      userId,
      songId,
      content,
    });
    return res.json(comments);
  })
);

router.put(
  '/api/tracks/:id(\\d+)/comments/:id(\\d+)',
  asyncHandler(async(req, res) => {
    const comment = await Comment.findByPk(req.params.id);
    const { content } = req.body;
    const update = await comment.update({
      content,
    });
    return res.json(update);
  })
);





module.exports = router;
