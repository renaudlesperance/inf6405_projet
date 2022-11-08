import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './CustomContainer.module.css'

export default function CustomContainer({ children }) {
  return (
    <Container>
      <div className={styles.divContainer}>
        {children}
      </div>
    </Container>
  );
}
