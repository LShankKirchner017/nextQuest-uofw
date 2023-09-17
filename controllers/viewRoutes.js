const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    console.log(req.session)

    res.render('homepage', {
      user: req.session.user,
      style: 'homePage',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    style: 'login',
  });
});

router.get('/new-list', (req,res) => {
  res.render('newList', {
    style: 'newList',
  })
})

router.get('/user-profile', (req,res) => {
  res.render('userProfile')
})

router.get('/sign-up', (req, res) => {
  res.render('signup')
})

router.get('/game-list', (req, res) => {
  res.render('gameList')
})


router.get('/create-profile', (req,res) => {
  res.render('createProfile')
})


module.exports = router;
