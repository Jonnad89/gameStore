const express = require('express')

const {
  createGame,
  getAllGames,
  updateGame,
  deleteGame,
  createReview
} = require('../controllers/games.controller')

const { protectSession } = require('../middlewares/auth.middleware')
const { gameExists } = require('../middlewares/games.middleware')

const gamesRouter = express.Router()

gamesRouter.get('/', getAllGames)

gamesRouter.use(protectSession)

gamesRouter.post('/', createGame)

gamesRouter.patch('/:id', gameExists, updateGame)

gamesRouter.delete('/:id', gameExists, deleteGame)

gamesRouter.post('/reviews/:gameId', createReview)

module.exports = { gamesRouter }