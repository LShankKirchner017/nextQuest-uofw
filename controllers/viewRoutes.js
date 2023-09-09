const router = require('express').Router();
const { User, List } = require('../models');
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

// router.get('/', async (req, res) => {
//   try {
//     const gameLists = await List.findAll({
//       raw: true
//     })
//     res.render('home', { list })
//   } catch(err) {
//     res.status(500).json(err)
//   }
// });
// router.get('/lists/:id', async (req, res) => {
//   try{
//     const list = await List.findByPk(req.params.id, {
//       include: [  {model: User} ],
//       raw:true,
//     })
//     res.render('list', list)
//   } catch(err) {
//       res.status(500).json(err)
//   }
// })

module.exports = router;
