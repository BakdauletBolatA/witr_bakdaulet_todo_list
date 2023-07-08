import React from 'react';
import styles from './myButton.module.css';

const MyButton = ({ onClick, children }) => {
  return (
    <button className={styles.myButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;