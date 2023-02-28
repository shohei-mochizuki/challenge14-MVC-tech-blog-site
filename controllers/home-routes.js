// Import middlewares and models
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth'); // Custom middleware for authentification

// GET for homepage ('/')
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{
          model: User,
          attributes: ['username'],
        }],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for posts page ('/post/:id')
router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [{
        model: Comment,
        include: [{
          model: User,
        }]
      }, { model: User }],
    });
    const post = dbPostData.get({ plain: true });
    console.log(post);
    res.render('post', { post, loggedIn: req.session.loggedIn, commenter: "Commenter" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for dashboard page ('/dashboard')
router.get('/dashboard', withAuth, async (req, res) => { // withAuth
  try {
    const dbPostData = await Post.findAll({
      include: [{
        model: User,
        attributes: ['username'],
      }],
      where: {
        user_id: req.session.user_id,
      },
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    // LATER
    res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
    // res.status(200).json(posts)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for add new post page ('/dashboard/newpost')
router.get('/dashboard/newpost', withAuth, (req, res) => { // withAuth

  // LATER
  res.render('newpost', { loggedIn: req.session.loggedIn });
  // res.status(200).json('Dashboard new post page!');
});

// GET for edit/delete post page ('/dashboard/post/:id')
router.get('/dashboard/post/:id', withAuth, async (req, res) => { // withAuth
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: Painting,
      //     attributes: [
      //       'id',
      //       'title',
      //       'artist',
      //       'exhibition_date',
      //       'filename',
      //       'description',
      //     ],
      //   },
      // ],
    });
    const post = dbPostData.get({ plain: true });
    res.render('editpost', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for signup page ('/signup')
router.get('/signup', (req, res) => {
  // LATER
  res.render('signup', { loggedIn: req.session.loggedIn });
  // res.status(200).json('Signup page!');
});

// GET for login page ('/login')
router.get('/login', (req, res) => {
  // LATER
  res.render('login', { loggedIn: req.session.loggedIn });
  // res.status(200).json('Login page!');
});

module.exports = router;
