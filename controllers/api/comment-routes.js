const router = require('express').Router();
const { Comment } = require('../../models');

// CREATE new comment
router.post('/', async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      content: req.body.content,
      creation_date: "",
      post_id: req.body,
      user_id: req.connection,
    });
      res.status(200).json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
