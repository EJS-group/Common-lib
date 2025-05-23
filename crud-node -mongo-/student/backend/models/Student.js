// models/Student.js 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true },
	gender: { type: String, required: true },
	// Add more fields as needed
});
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
