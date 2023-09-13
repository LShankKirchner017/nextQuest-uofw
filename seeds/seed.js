const sequelize = require("../config/connection");
const { User, Game_List } = require("../models");

const userData = require("./userData.json");
const gameList = require("./gameList.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Game_List.bulkCreate(gameList, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
