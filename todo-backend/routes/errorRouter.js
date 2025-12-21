// External modules
const express = require('express');

const errorRouter = express.Router();

const errorController = require('../controllers/errorController');

// Routes
errorRouter.use(errorController.pageNotFound);

module.exports = errorRouter;