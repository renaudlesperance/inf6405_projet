import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './BackButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'



export default function BackButton({ onClick }) {
  return (
    <div className={styles.container}>
      <Button variant="secondary" onClick={onClick}>
        <FontAwesomeIcon icon={faCircleArrowLeft} />
        <span className={styles.text}>Page précédente</span>
      </Button>
    </div>
  );
}

