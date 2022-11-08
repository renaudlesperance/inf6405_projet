import React from 'react';
import styles from './Marker.module.css';

export default function Marker({ id, onClick }) {

  return (
    <div className={styles.pin} onClick={() => onClick(id)} />
  );
}
