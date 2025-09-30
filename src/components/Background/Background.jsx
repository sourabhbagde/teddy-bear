import React from 'react';
import styles from './Background.module.css';

const Background = () => {
  return (
    <div className={styles.day_background}>
      <div className={styles.sun}></div>
    </div>
  );
};

export default Background;
