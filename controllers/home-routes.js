// Import middlewares and models
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth'); // Custom middleware for authentification

// GET for homepage ('/')
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      // include: [
      //   {
      //     model: Painting,
      //     attributes: ['filename', 'description'],
      //   },
      // ],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    // LATER
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    console.log(posts);
    // TEST
    // res.status(200).json(posts)
 
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for posts page ('/post/:id')
router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          // attributes: [
          //   'id',
          //   'title',
          //   'artist',
          //   'exhibition_date',
          //   'filename',
          //   'description',
          // ],
        },
      ],
    });
    const post = dbPostData.get({ plain: true });
    // console.log(post);

    // LATER
    res.render('post', { post, loggedIn: req.session.loggedIn });
    // res.status(200).json(post)
  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for dashboard page ('/dashboard')
router.get('/dashboard', async (req, res) => { // withAuth
  try {
    const dbPostData = await Post.findAll({
      // include: [
      //   {
      //     model: Painting,
      //     attributes: ['filename', 'description'],
      //   },
      // ],
      // WHERE
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
router.get('/dashboard/newpost', (req, res) => { // withAuth

  // LATER
  res.render('newpost', { loggedIn: req.session.loggedIn });
  // res.status(200).json('Dashboard new post page!');
});

// GET for edit/delete post page ('/dashboard/post/:id')
router.get('/dashboard/post/:id', async (req, res) => { // withAuth
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
      // WHERE
    });
    const post = dbPostData.get({ plain: true });
    // console.log(post);

    // LATER
    res.render('changepost', { post, loggedIn: req.session.loggedIn });
    // res.status(200).json(post);

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
  // res.render('login', { loggedIn: req.session.loggedIn });
  res.status(200).json('Login page!');
});

module.exports = router;




















// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );

    res.render('homepage', {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/gallery/:id', withAuth, async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const gallery = dbGalleryData.get({ plain: true });
    res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/painting/:id', withAuth, async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



















