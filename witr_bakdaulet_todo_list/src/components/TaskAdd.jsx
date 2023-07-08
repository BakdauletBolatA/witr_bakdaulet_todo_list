import React, { useState } from 'react';
import MyButton from './button/myButton';
import styles from './TaskAdd.module.css';

const TaskAdd = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <div className={styles['task-input']}>
      <input
        className={styles['task-input__input']}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="What is the task for today?"
      />
      <MyButton className={styles['task-input__button']} onClick={handleAddTask}>
        Add
      </MyButton>
    </div>
  );
};

export default TaskAdd;