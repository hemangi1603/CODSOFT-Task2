import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './TaskTracker.css';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, complete: !task.complete } : task
    ));
  };

  return (
    <div className="task-tracker">
      <h1>Task Tracker</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        updateTask={updateTask} 
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default TaskTracker;
