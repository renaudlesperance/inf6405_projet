import {useNavigate,useParams} from 'react-router-dom'
import {Card, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import Data from "../../data/data.json";

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
import CustomContainer from '../customContainer/CustomContainer';

var testcount = 1

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
  scales: {
    x: {
        type: 'linear',
        min: 2,
        max: 9,      
        title: {
          display: true,
          text: 'Your Title'
        }
    },
    y: {
        type: 'linear',
        title: {
          display: true,
          text: Data.hum_values[2],
        }
    },
  },
  elements: {
      point: {
          radius: 0 // default to disabled in all datasets
      },
  },
};

const labels = Data.labels;
export const dataTemp = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Data.temp_values,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const dataHum = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Data.hum_values,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const dataWater = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Data.water_values,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

// const chart = new ChartJS();
// chart.options.title.text = 'new title';
// chart.update();


// export const lineChart = new ChartJS( {
//   type: 'line',
//   data: dataWater,
//   options : options
// });

const drawLine = ({}) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Data.water_values,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const options_test = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
          type: 'linear',
          min: 2,
          max: 9,      
          title: {
            display: true,
            text: 'Your Title'
          }
      },
      y: {
          type: 'linear',
          title: {
            display: true,
            text: Data.hum_values[2],
          }
      },
    },
    elements: {
        point: {
            radius: 0 // default to disabled in all datasets
        },
    },
  }

  return (
    <div>
    <Line options={options_test} data={data} />
    </div>
  )
}

function StatCard () {
  const [active, setActive] = useState(1)

  return (
    <Card>
      <Card.Header as="h5">
        <div className={styles.headerCardDashboard}>
          <span>StatCard</span>
          <ButtonGroup id={styles.buttonGroupDashboard}>
            <Button variant="outline-secondary" onClick={() => setActive(1)} active={active === 1}>Temps réel</Button>
            <Button variant="outline-secondary" onClick={() => setActive(2)} active={active === 2}>Jour</Button>
            <Button variant="outline-secondary" onClick={() => setActive(3)} active={active === 3}>Semaine</Button>
          </ButtonGroup>
        </div>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
          <Button onClick={() => drawLine}> test </Button>
            <drawLine/>
            {/* <Line options={options} data={dataTemp}/> */}
          </Col>
          <Col>
            {/* <Line options={options} data={dataHum} /> */}
          </Col>
          <Col>
            {/* <Line options={options} data={dataWater} /> */}
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
      <CustomContainer>
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
      </CustomContainer>
    </div>
  );
}

export default Dashboard;
