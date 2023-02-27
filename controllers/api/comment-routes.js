const router = require('express').Router();
const { Comment } = require('../../models');

// CREATE new comment
router.post('/', async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      content: req.body.content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
      res.status(200).json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Fetchの部分であらかじめpost_idは取得しておき、req.bodyに入れておく
// const id = window.location.toString().split('/')[
//  window.location.toString().split('/').length - 1];
// method: 'POST',
// body: JSON.stringify({
//  content,
//  creation_date,
//  post_id,

module.exports = router;
