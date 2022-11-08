import React from 'react';
import styles from './Cameras.module.css'
import BackButton from '../backButton/BackButton';
import CustomContainer from '../customContainer/CustomContainer';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'

function Cameras() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <BackButton onClick={() => navigate(`/Dashboard/${id}`)} />
      <CustomContainer>
        <div className={styles.titleDashboard}><h1>Caméras de la serre n°{id}</h1></div>
        <Row>
          <Col sm={9}>1</Col>
          <Col sm={3}>2</Col>
        </Row>
      </CustomContainer>
    </div>
  );
}

export default Cameras;
