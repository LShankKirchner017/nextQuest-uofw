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

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
      style: 'homePage.css',
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
    style: 'login.css',
  });
});

router.get('/new-list', (req,res) => {
  res.render('newList', {
    style: 'newList.css',
  })
})

router.get('/user-profile', (req,res) => {
  res.render('userProfile')
})

router.get('/sign-up', (req, res) => {
  res.render('signup')
})

module.exports = router;
