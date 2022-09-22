const { db, DataTypes } = require('../utils/database.util')

const GameInConsole = db.define('gameInConsole', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  consoleId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gameId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  status: {

    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 'active'
  }
})

module.exports = { GameInConsole }