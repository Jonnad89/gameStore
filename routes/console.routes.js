const express = require('express');

// Controller
const {
  createConsole,
  getAllConsoles,
  updateConsole,
  deleteConsole,
} = require('../controllers/console.controller');

// Middlewares
const { protectSession } = require('../middlewares/auth.middleware');
const { consoleExists } = require('../middlewares/console.middleware');

const consolesRouter = express.Router();

consolesRouter.get('/', getAllConsoles);

consolesRouter.use(protectSession);

consolesRouter.post('/', createConsole);

consolesRouter.patch('/:id', consoleExists, updateConsole);

consolesRouter.delete('/:id', consoleExists, deleteConsole);

module.exports = { consolesRouter };