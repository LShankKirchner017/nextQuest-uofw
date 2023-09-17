const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
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

router.get('/user-profile', withAuth, async (req,res) => {
  let user = await User.findByPk(req.session.user.id, {
    // TODO include gameList (array of game lists)
  })
  user = user.get({
    plain: true
  })
  console.log(user)
  res.render('userProfile', user)
})

router.get('/sign-up', (req, res) => {
  res.render('signup', {
    style: 'signup.css',
  })
})

router.get('/game-list', (req, res) => {
  res.render('gameList')
  // TODO render in gamelist by ID
})



module.exports = router;
