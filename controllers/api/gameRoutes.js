const router = require('express').Router();
const { Game_List } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
        const newGamelist = await Game_List.create({
            ...req.body,
            user_id: req.session.user.id,
        })

        res.status(200).json(newGamelist)
    } catch (err) {
        res.status(400).json(err)
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const gameData = await Game_List.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,

            },
        });

        if(!gameData) {
            res.status(404).json({message: 'No Game list found with this id!'})
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router
