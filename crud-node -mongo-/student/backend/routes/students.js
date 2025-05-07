// routes/students.js

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get all students
router.route('/').get((req, res) => {
	Student.find()
		.then(students =>
			res.json(students))
		.catch(err =>
			res.status(400)
				.json('Error: ' + err));
});

// Add new student
router.route('/add')
	.post((req, res) => {
		const { name, age, gender } = req.body;

		const newStudent =
			new student({ name, age, gender });

		newStudent.save()
			.then(savedStudent =>
				res.json(savedStudent))
			.catch(err => res.status(400)
				.json('Error: ' + err));
	});

// Update student data
router.route('/update/:id')
	.post((req, res) => {
		console.log('hihhhhiuhiihihiuhiuh');

		Student.findById(req.params.id)
			.then(student => {
				if (!student) {
					return res.status(404)
						.json('student not found');
				}

				student.name = req.body.name;
				student.age = req.body.age;
				student.gender = req.body.gender;

				student.save()
					.then(() => res.json('student updated!'))
					.catch(err => res.status(400)
						.json('Error: ' + err));
			})
			.catch(err => res.status(400)
				.json('Error: ' + err));
	});

// Delete student by ID
router.route('/delete/:id')
	.delete((req, res) => {
		Student.findByIdAndDelete(req.params.id)
			.then(student => {
				if (!student) {
					return res.status(404)
						.json('student not found');
				}
				res.json('student deleted!');
			})
			.catch(err => res.status(400)
				.json('Error: ' + err));
	});

module.exports = router;
