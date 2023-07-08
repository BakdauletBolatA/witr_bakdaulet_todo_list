import React, { useState } from 'react';
import TaskAdd from './components/TaskAdd';
import TaskList from './components/TaskList';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>

      <TaskAdd onAdd = {handleAddTask} />

      <TaskList tasks = {tasks} onDeleteTask = {handleDeleteTask} />
    </div>
  );
};

export default App;