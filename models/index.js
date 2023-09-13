const User = require("./User");
const Game_List = require("./Game_List");

User.hasMany(Game_List, {
  foreignKey: "user_id",
});

Game_List.belongsTo(User);

module.exports = { User, Game_List };