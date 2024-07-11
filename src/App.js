import React, { useState } from 'react';
import './App.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleEditClick = (task) => {
    setIsEditing(true);
    setTaskText(task.text);
    setCurrentTask(task);
  };

  const handleUpdateTask = () => {
    setTasks(tasks.map(task => 
      task.id === currentTask.id ? { ...task, text: taskText } : task
    ));
    setTaskText('');
    setIsEditing(false);
    setCurrentTask(null);
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const incompleteTasks = tasks.length - completedTasks;

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <div className="task-list">
        <input 
          type="text" 
          value={taskText} 
          onChange={handleInputChange} 
          placeholder="Add a new task" 
        />
        {isEditing ? (
          <button onClick={handleUpdateTask}>Update Task</button>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.text}
              </span>
              <div className="buttons">
                <button className="edit-btn" onClick={() => handleEditClick(task)}><FaEdit /></button>
                <button className="delete-btn" onClick={() => deleteTask(task.id)}><FaTrashAlt /></button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <p>Completed tasks: {completedTasks}</p>
          <p>Incomplete tasks: {incompleteTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
