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
router.update('/:id', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
