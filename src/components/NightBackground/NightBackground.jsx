import React from 'react';
import styles from './NightBackground.module.css';

const NightBackground = () => {
  return (
    <div className={styles.night_background}>
      <div className={styles.moon}></div>
    </div>
  );
};

export default NightBackground;
