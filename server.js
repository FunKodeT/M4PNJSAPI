const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
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
