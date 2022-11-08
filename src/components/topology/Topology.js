import React from 'react';
import styles from './Topology.module.css';
import {useNavigate,useParams} from 'react-router-dom'
import BackButton from '../backButton/BackButton';

function Topology() {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div className="Topology">
      <BackButton onClick={() => navigate(`/Dashboard/${id}`)} />
      <h2>Topology</h2>
    </div>
  );
}

export default Topology;
