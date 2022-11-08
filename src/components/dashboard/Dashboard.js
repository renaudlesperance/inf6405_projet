import {useNavigate,useParams} from 'react-router-dom'
import {Card,Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'

import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './Dashboard.module.css';
import BackButton from '../backButton/BackButton';
import ClickableContainer from '../clickableContainer/ClickableContainer';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {},
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Lundi 12:00', 'Lundi 24:00', 'Lundi 12:00', 'Lundi 24:00','Lundi 12:00', 'Lundi 24:00','Lundi 12:00', 'Lundi 24:00','Lundi 12:00', 'Lundi 24:00','Lundi 12:00', 'Lundi 24:00','Lundi 12:00', 'Lundi 24:00',];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 1, 2, 3, 1],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


function StatCard () {
  const [active, setActive] = useState(1)

  return (
    <Card>
      <Card.Header as="h5">
        <div className={styles.headerCardDashboard}>
          <span>StatCard</span>
          <ButtonGroup id={styles.buttonGroupDashboard}>
            <Button variant="outline-secondary" onClick={() => setActive(1)} active={active === 1} >Temps réel</Button>
            <Button variant="outline-secondary" onClick={() => setActive(2)} active={active === 2}>Jour</Button>
            <Button variant="outline-secondary" onClick={() => setActive(3)} active={active === 3}>Semaine</Button>
          </ButtonGroup>
        </div>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Line options={options} data={data} />
          </Col>
          <Col>
            <Line options={options} data={data} />
          </Col>
          <Col>
            <Line options={options} data={data} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

function CamerasCard () {
  return (
    <Card>
      <Card.Header as="h5">CamerasCard</Card.Header>
      <Card.Body>
        contenus
      </Card.Body>
    </Card>
  );
};

function SensorsCard () {
  return (
    <Card>
      <Card.Header as="h5">SensorsCard</Card.Header>
      <Card.Body>
        contenus
      </Card.Body>
    </Card>
  );
};

function TopologyCard () {
  return (
    <Card>
      <Card.Header as="h5">TopologyCard</Card.Header>
      <Card.Body>
        contenus
      </Card.Body>
    </Card>
  );
};

function Dashboard() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <BackButton onClick={() => navigate('/GreenHouseMap')} />
      <Container>
        <div className={styles.titleDashboard}><h1>Serre n°{id}</h1></div>
        <div className={styles.firstRow}>
          <Row>
            <Col>
              <StatCard/>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <ClickableContainer onClick={() => navigate(`/Cameras/${id}`)}>
              <CamerasCard/>
            </ClickableContainer>
           </Col>
          <Col>
            <ClickableContainer onClick={() => navigate(`/Sensors/${id}`)}>
              <SensorsCard/>
            </ClickableContainer>
          </Col>
          <Col>
            <ClickableContainer onClick={() => navigate(`/Topology/${id}`)}>
              <TopologyCard/>
            </ClickableContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
