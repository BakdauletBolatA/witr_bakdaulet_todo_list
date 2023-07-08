import React from 'react';
import styles from './MyInput.module.css';

const MyInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      className = {styles.myInput}
      type = "text"
      value = {value}
      onChange = {onChange}
      placeholder = {placeholder}
    />
  );
};

export default MyInput;