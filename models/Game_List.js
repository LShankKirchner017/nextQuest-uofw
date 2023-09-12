const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')


class Game_List extends Model{}

Game_List.init(
  {
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
      type: DataTypes.ENUM(["easy", "medium", "hard"]),
      allowNull: true,
    },
    length: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: true,
    },
    is_priority: {
      type: DataTypes.BOOLEAN,
    },
     date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Game_List",
  }
);

module.exports = Game_List