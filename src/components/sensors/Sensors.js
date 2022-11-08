import React from 'react';
import styles from './Sensors.module.css';
import {useNavigate,useParams} from 'react-router-dom'
import BackButton from '../backButton/BackButton';

function Sensors() {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div className="Sensors">
      <BackButton onClick={() => navigate(`/Dashboard/${id}`)} />
      <h2>Sensors</h2>
    </div>
  );
}

export default Sensors;
