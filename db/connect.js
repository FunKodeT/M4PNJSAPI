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
