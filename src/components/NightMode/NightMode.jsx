import React from 'react';
import styles from './NightMode.module.css';

const NightMode = () => {
  return (
    <div className={styles.night_background}>
      <div className={styles.moon}></div>
      <div className={styles.teddy_sleeping}></div>
    </div>
  );
};

export default NightMode;
