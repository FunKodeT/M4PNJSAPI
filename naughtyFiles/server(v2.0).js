const express = require('express');
const cors = require('cors');
const mongodb = require('./db/connect');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors()).use('/', require('./routes'));
mongodb.initDb((err) => {
	if (err) {
		console.log(err);
	} else {
		app.listen(PORT);
		console.log(
			'\x1b[34m%s\x1b[0m',
			`Connected to DB and listening on ${PORT}`
		);
	}
});
/* 
const connectDB = require('./db/connect');
app.use('/', require('./routes'));
connectDB;
app.listen(connectDB, () => {
	if (!connectDB) {
		console.log(error);
		process.exit(1);
	} else {
		console.log('MongoDB connection...established. Success!');
	}
});
app.listen(PORT, () => {
	console.log(`Test server running on port ${PORT}`);
}); 
*/
