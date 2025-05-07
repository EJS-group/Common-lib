import React from 'react';

const StudentCard =
	(
		{
			student, onEdit,
			onDelete
		}
	) => {
		return (
			<div className="student-card">
				<h4>{student.name}</h4>
				<p>Age: {student.age}</p>
				<p>Gender: {student.gender}</p>
				<div className='btn-container'
					style={{ width: "100%" }}>
					<button onClick={
						() =>
							onEdit(student)}>
						Edit
					</button>
					<button onClick={
						() =>
							onDelete(student._id)
					}>
						Delete
					</button>
				</div>
			</div>
		);
	};

export default StudentCard;
