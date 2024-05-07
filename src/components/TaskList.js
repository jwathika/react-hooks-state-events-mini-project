import React, { useState } from 'react';
import Task from './Task';

function TaskList({ TASKS }) {
	const [tasks, setTasks] = useState(TASKS);

	const onDelete = (text) => {
		const newTasks = tasks.filter((task) => task.text !== text);
		setTasks(newTasks);
	};

	const allTasks = tasks.map((task) => (
		<Task
			key={task.text}
			text={task.text}
			onDelete={onDelete}
			category={task.category}
		/>
	));

	return <div className='tasks'>{allTasks}</div>;
}

export default TaskList;
