import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} content={task} onDelete={() => onDeleteTask(index)} />
      ))}
    </div>
  );
};

export default TaskList;