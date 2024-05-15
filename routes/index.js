const myController = require('../controllers');
const routes = require('express').Router();

routes.get('/', myController.awesomeFn);

routes.get('/ttech', myController.tTech);

routes.get('/kodeT', myController.kodeT);

routes.get('/students', myController.getAllStudents);

routes.get('/ttechJSON', myController.tTechFn);

routes.get('/awesomeNm', myController.awesomeNameFn);

module.exports = routes;
