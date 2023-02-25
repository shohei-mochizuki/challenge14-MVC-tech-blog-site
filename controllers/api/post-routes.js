const router = require('express').Router();
const { Post } = require('../../models');

// Create new comment
router.post('/', async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      creation_date: req.body.creation_date,
      user_id: req.session.user_id,
    });
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update existing post
router.put('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.update({
      title: req.body.title,
      content: req.body.content,
      creation_date: req.body.creation_date,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(dish);
  } catch (err) {
      res.status(500).json(err);
    };
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
