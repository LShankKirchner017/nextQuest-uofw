const router = require('express').Router();
const { User, Game_List } = require('../models');
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

router.get('/user-profile', withAuth, async (req,res) => {
  let user = await User.findByPk(req.session.user.id, {
    // TODO include gameList (array of game lists)
    include: [{model: Game_List}]
  })
  user = user.get({
    plain: true
  })
  console.log(user)
  res.render('userProfile', {user, style: 'profile'})
})

router.get('/sign-up', (req, res) => {
  res.render('signup', {
    style: 'signup',
  })
})

router.get('/game-list/:id', async (req, res) => {
  const listId = req.params.id
  let game = await Game_List.findByPk(listId)
  game = game.get({
    plain: true
  })
  console.log(game)
  res.render('gameList', game)
})



module.exports = router;
