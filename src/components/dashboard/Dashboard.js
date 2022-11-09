import {useNavigate,useParams} from 'react-router-dom'
import {Card, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import Data from "../../data/data.json";

import React, { useState,useEffect } from 'react';
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

const DrawLine = ({timestep,data_v,d_min,d_max,title,color,y_label}) => {
  const labels = Data.labels;
  const timeUnits = ["Seconde","Heure","Jour"]
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: data_v,
        borderColor: color,
        backgroundColor: color,
      },
    ],
  }

  const options_test = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
          type: 'linear',
          min: d_min,
          max: d_max,      
          title: {
            display: true,
            text: "Temps [" + timeUnits[timestep-1] + "]"
          }
      },
      y: {
          type: 'linear',
          title: {
            display: true,
            text: y_label,
          }
      },
    },
    elements: {
        point: {
          radius: 0 
        },
    },
  }

  return (
    <Line options={options_test} data={data} />
  )
}


const SelectedTimeDrawLine = ({value_type,active,customParams}) => {
  const dataT = Data.temp_values;
  const dataH = Data.hum_values;
  const dataW = Data.water_values;
  const allData = [dataT,dataH,dataW,]
  const allDataNameAndLabel = [["Temperature","Temperature [C]"],["Humidité","Humidité [g.m-3]"],["Consomation d'Eau","Eau [L]"]]
  const colors = ["#ef4423","#628b3c","#010585"]
  const minMax_intervalle = [[customParams.min,customParams.max],[0,24],[0,7]]

  return (       
    <DrawLine timestep = {active} data_v = {allData[value_type]} d_min = {minMax_intervalle[active-1][0]} d_max = {minMax_intervalle[active-1][1]}
      title = {allDataNameAndLabel[value_type][0]} y_label = {allDataNameAndLabel[value_type][1]} color={colors[value_type]}/>
      )
}

function StatCard () {
  const [active, setActive] = useState(1)
  const [customParams, setCustomParams] = useState({min:0,max:3});
  console.log(active)
  useEffect(() => {
    var min = 0
    var max = 3
    const interval = setInterval(() => {
      min += 2
      max += 2
      setCustomParams ({min,max})
      console.log({min,max})
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
            <SelectedTimeDrawLine value_type = {0} active = {active} customParams = {customParams}/>
          </Col>
          <Col>
            <SelectedTimeDrawLine value_type = {1} active = {active} customParams = {customParams}/>
          </Col>
          <Col>
            <SelectedTimeDrawLine value_type = {2} active = {active} customParams = {customParams}/>
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
