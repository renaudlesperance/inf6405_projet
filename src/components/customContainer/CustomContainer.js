import React from 'react';
import { Container } from 'react-bootstrap';

export default function CustomContainer({ children }) {
  return (
    <Container>
      <div className='divContainer'>
        {children}
      </div>
    </Container>
  );
}
