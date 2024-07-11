import React, { useState } from 'react';
import './TaskTracker.css';

const AddTaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), text: taskText, complete: false });
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        required 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
