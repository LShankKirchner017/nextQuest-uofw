const User = require('./User');
const Gamelist = require('./gameList');

User.hasMany(Gamelist, {
    foreignKey: 'id'
});

Gamelist.belongsTo(User, {
    foreignKey: 'id'
});



module.exports = { User, Gamelist };
