import React from 'react';
import './TaskTracker.css';

const TaskItem = ({ task, deleteTask, updateTask, toggleComplete }) => {
  return (
    <li className={task.complete ? 'completed' : ''}>
      <span onClick={() => toggleComplete(task.id)}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => updateTask({ ...task, text: 'New Task Text' })}>Edit</button>
    </li>
  );
};

export default TaskItem;
