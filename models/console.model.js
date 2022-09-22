const { db, DataTypes } = require('../utils/database.util')

const Console = db.define('console', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {

    allowNull: false,
    type: DataTypes.INTEGER,
  },
  status: {

    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 'active'
  }
})

module.exports = { Console }