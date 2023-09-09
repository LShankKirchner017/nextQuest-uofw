const router = require('express').Router();
const { raw } = require('express');
const { User, Gamelist } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('home', {
      users,
      logged_in: req.session.logged_in,
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

  res.render('login');
});

router.get('/', async (req, res) => {
  try {
    const gameLists = await Gamelist.findAll({
      raw: true
    })
    res.render('home', { gamelist })
  } catch(err) {
    res.status(500).json(err)
  }
});
router.get('/gamelists/:id', async (req, res) => {
  try{
    const gameList = await Gamelist.findByPk(req.params.id, {
      include: [  {model: User} ],
      raw:true,
    })
    res.render('gamelist', gamelist)
  } catch(err) {
      res.status(500).json(err)
  }
})

router.get('/profile', async(req, res) => {
  const user_id = req.session.user_id
  if(!user_id) {
    res.redirect('/login')
  }
  try {
    const user = await User.findByPk(user_id, {raw: true})

    res.render('profile', user)
  } catch(err) {
    res.status(500).json(err)
  }
})



module.exports = router;
