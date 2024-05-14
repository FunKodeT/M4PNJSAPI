/*
const mongoose = require('mongoose');
const mongooseDB = process.env.MONGO_URI;
const connectDB = async () => {
	try {
		await mongoose.connect(mongooseDB);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
module.exports = connectDB;
 */
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;
let _db;
const initDb = (callback) => {
	if (_db) {
		console.log('Db is already initialized!');
		return callback(null, _db);
	}
	MongoClient.connect(process.env.MONGO_URI)
		.then((client) => {
			_db = client;
			callback(null, _db);
		})
		.catch((err) => {
			callback(err);
		});
};
const getDb = () => {
	if (!_db) {
		throw Error('Db not initialized');
	}
	return _db;
};

module.exports = {initDb, getDb};
