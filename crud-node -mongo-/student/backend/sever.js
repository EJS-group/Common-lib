// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentsRouter = require('./routes/students.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
	'mongodb://localhost:27017/study',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

app.use('/students', studentsRouter);


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
