import React from 'react';

function NewTaskForm({ CATEGORIES }) {
	const categoriesList = CATEGORIES.map((cat) => (
		<option key={cat}>{cat}</option>
	));

	return (
		<form className='new-task-form'>
			<label>
				Details
				<input required type='text' name='text' />
			</label>
			<label>
				Category
				<select name='category'>{categoriesList}</select>
			</label>
			<input type='submit' value='Add task' />
		</form>
	);
}

export default NewTaskForm;
