import React from 'react';
import styles from './ClickableContainer.module.css';

export default function ClickableContainer({ children, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
}

