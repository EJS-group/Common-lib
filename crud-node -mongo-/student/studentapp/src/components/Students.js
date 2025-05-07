// src/components/Students.js 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Students.css';
import StudentCard from './StudentCard';

const Students = () => {
	const [students, setStudents] = useState([]);
	const [newStudent, setNewStudent] =
		useState({ name: '', age: '', gender: '' });
	const [selectedStudent, setSelectedStudent] = useState(null);
	const [isEditMode, setIsEditMode] = useState(false);


	useEffect(
		() => {
			axios.get('http://localhost:4000/students')
				.then(response => setStudents(response.data))
				.catch(error =>
					console.error('Error fetching students:', error));
		}, []);


	const handleAddStudent =
		(e) => {
			e.preventDefault();

			axios.post(
				'http://localhost:4000/students/add', newStudent)
				.then(response => {
					console.log(response.data);
					setStudents([...students, response.data]);
					setNewStudent({ name: '', age: '', gender: '' });
				})
				.catch(error =>
					console.error('Error adding patient:', error));
		};

	const handleUpdateStudent =
		(id, e) => {
			e.preventDefault();

			axios.post(
				`http://localhost:4000/students/update/${id}`, selectedStudent)
				.then(response => {
					const updateStu = {
						...selectedStudent,
						_id: id
					};

					console.log('update student', updateStu);

					setStudents(
						students.map(
							student =>
							(student._id === id
								? updateStu : student)));

					setSelectedStudent(null);
					setIsEditMode(false); // Switch back to Add mode
				})
				.catch(
					error =>
						console.error('Error updating patient:', error));
		};

	const handleDeleteStudent =
		(id) => {
			axios.delete(
				`http://localhost:4000/students/delete/${id}`)
				.then(response => {
					console.log(response.data);
					setSelectedStudent(null);
					setStudents(
						students.filter(
							patient => patient._id !== id));
				})
				.catch(
					error =>
						console.error('Error deleting patient:', error));
		};

	const handleEditStudent =
		(patient) => {
			setSelectedStudent(patient);
			setIsEditMode(true); // Switch to Edit mode
		};

	return (
		<div className='student-main '>
			<div className='form-sections '>
				<h4>
					{
						isEditMode ?
							'Edit Student' :
							'Add New Student'
					}
				</h4>
				<form onSubmit=
					{
						isEditMode ?
							(e) =>
								handleUpdateStudent(selectedStudent._id, e) :
							handleAddStudent}>
					<label>Name: </label>
					<input type="text"
						value={
							isEditMode ?
								selectedStudent.name :
								newStudent.name
						}
						onChange={
							(e) =>
								isEditMode
									? setSelectedStudent(
										{
											...selectedStudent,
											name: e.target.value
										}) :
									setNewStudent(
										{
											...newStudent,
											name: e.target.value
										}
									)} />
					<br />
					<label>Age: </label>
					<input type="text"
						value=
						{
							isEditMode ?
								selectedStudent.age : newStudent.age
						}
						onChange={
							(e) =>
								isEditMode ?
									setSelectedStudent(
										{
											...selectedStudent,
											age: e.target.value
										}) :
									setNewStudent(
										{
											...newStudent,
											age: e.target.value
										}
									)} />
					<br />
					<label>Gender: </label>
					<input type="text"
						value=
						{
							isEditMode ?
								selectedStudent.gender :
								newStudent.gender
						} onChange={
							(e) =>
								isEditMode ?
									setSelectedStudent(
										{
											...selectedStudent,
											gender: e.target.value
										}) :
									setNewStudent(
										{
											...newStudent,
											gender: e.target.value
										})} />
					<br />
					<button type="submit">
						{
							isEditMode ?
								'Update Student' :
								'Add Student'
						}
					</button>
				</form>
			</div>

			<div className='students-section '>
				<h3 style={{ textAlign: "center" }}>
					Patients
					({students.length})
				</h3>

				<div className="student-list">
					{students.map(student => (
						<StudentCard
							key={student._id}
							student={student}
							onEdit={handleEditStudent}
							onDelete={handleDeleteStudent}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Students;
