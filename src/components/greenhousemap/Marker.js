import React from 'react';
import './Marker.css';

export default function Marker({ id, onClick }) {

  return (
    <div className='pin' onClick={() => onClick(id)} />
  );
}
