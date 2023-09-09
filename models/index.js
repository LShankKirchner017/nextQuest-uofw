const User = require('./User');
const List = require('/gameList');

User.hasMany(List, {
    foreignKey: 'id'
});

List.belongsTo(User, {
    foreignKey: 'id'
});



module.exports = { User, List };
