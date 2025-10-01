import React from 'react';
import styles from './DayMode.module.css';

const DayMode = () => {
  return (
    <div className={styles.day_background}>
      <div className={styles.sun}></div>
      <div className={styles.teddy_eating}></div>
    </div>
  );
};

export default DayMode;
