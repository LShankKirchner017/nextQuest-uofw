const { Model, DataTypes, BOOLEAN } = require('sequelize')
const sequelize = require('../config/connection')

List.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  game: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  difficulty: {
    type: DataTypes.ENUM("easy" | "medium" | "hard"),
    allowNull: true,
  },
  length: {
    type: DataTypes.DECIMAL(2),
    allowNull: true,
  },
  is_priority: {
    type: DataTypes.BOOLEAN,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "gameList",
	}
);

module.exports = List