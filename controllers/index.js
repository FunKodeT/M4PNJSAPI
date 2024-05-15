const mongodb = require('../db/connect');
const ObjectID = require('mongodb').ObjectID;

const awesomeFn = (req, res, next) => {
	res.send('Hello World!');
};

const tTech = (req, res, next) => {
	res.send('Tooele Tech is Awesome!');
};

const kodeT = (req, res, next) => {
	res.send('Hello there.');
};

const awesomeNameFn = (req, res, next) => {
	res.json('Awesome Name!');
};

const tTechFn = (req, res, next) => {
	res.json('Tooele Tech is Awesome!');
};

const getAllStudents = async (req, res) => {
	try {
		const result = await mongodb.getDB().db().collection('students').find();
		result.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists);
		});
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	awesomeFn,
	tTech,
	kodeT,
	getAllStudents,
	awesomeNameFn,
	tTechFn,
};
