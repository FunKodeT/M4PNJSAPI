const myController = require('../controllers');
const routes = require('express').Router();

routes.get('/', myController.awesomeFunction);

routes.get('/ttech', myController.tooeleTech);

routes.get('/kodeT', myController.kodeT);

module.exports = routes;
