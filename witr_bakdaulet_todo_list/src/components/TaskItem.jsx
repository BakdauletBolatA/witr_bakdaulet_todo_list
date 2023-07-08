import React from 'react';
import styles from './TaskItem.module.css';
import MyButton from "./button/myButton";

const TaskItem = ({ content, onDelete }) => {
  return (
    <div className="task">
      <span className="task_content">{content}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;