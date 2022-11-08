import React from 'react';
import { Container } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import styles from './CustomContainer.module.css'

export default function CustomContainer({ children, withMargin }) {
  return (
    <Container>
      <div className={withMargin ? styles.divContainer : null}>
        {children}
      </div>
    </Container>
  );
}

CustomContainer.propTypes = {
  children: PropTypes.node.isRequired,
  withMargin: PropTypes.bool
}

CustomContainer.defaultValues = {
  withMargin: false
}
