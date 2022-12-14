import {useNavigate,useParams} from 'react-router-dom'
import {Card, Row, Col, ButtonGroup, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'
import Data from "../../data/data.json";
import { faTemperatureHigh, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DrawLine = ({timestep,data_x,data_y,d_min,d_max,title,color,y_label}) => {
  const labels = data_x;
  const timeUnits = ["Seconde","Heure","Jour"]
  const data = {
    labels,
    datasets: [
      {
        data: data_y,
        borderColor: color,
        backgroundColor: color,
        borderWidth: 2,
      },
    ],
  }

  const options_test = {
    maintainAspectRatio: true,
    responsive: false,
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
      <Line options={options_test} data={data} height={275} width={404.5} />
  )
}

const SelectedTimeDrawLine = ({value_type,timeIndx,customParams}) => {
  const time = Data.days
  const dataT = Data.temp_values;
  const dataH = Data.hum_values;
  const dataW = Data.water_values;
  const dataPH = Data.pH_values;
  const dataCO2 = Data.CO2_values;
  const dataSun = Data.Sun_values;
  const dataPower1 = Data.power1;
  const dataPower2 = Data.power2;
  const dataPower3 = Data.power3;
  const allData = [dataT,dataH,dataW,dataPH,dataCO2,dataSun,dataPower1,dataPower2,dataPower3]

  const allDataNameAndLabel = [["Temperature","C"],["Humidit?? relative","%"],["Consomation d'Eau (cumulative)","L"],["pH de l'Eau","pH"],["Concentration CO2","ppm"],["Insolation","Wm^2"],["Charge restante","%"],["Charge restante","%"],["Charge restante","%"]]
  const colors = ["#ef4423","#628b3c","#010585","#ee44cc","#b88600","#FF9B00","#000000","#000000","#000000"]
  const minMax_intervalle = [[customParams.min,customParams.max],[0,24],[0,6]]

  return (
    <DrawLine timestep = {timeIndx} data_x = {Data.times[timeIndx-1]} data_y = {allData[value_type][timeIndx-1]}
      d_min = {minMax_intervalle[timeIndx-1][0]} d_max = {minMax_intervalle[timeIndx-1][1]}
      title = {allDataNameAndLabel[value_type][0]} y_label = {allDataNameAndLabel[value_type][1]} color={colors[value_type]}/>
      )
}

const ActiveStatDraw = ({activeGraphType,timeIndx,customParams}) => {
  const toDisplay = [];
  for (const activeGraph of activeGraphType) {
    toDisplay.push(
      <Col>
        <SelectedTimeDrawLine value_type = {activeGraph-1} timeIndx = {timeIndx} customParams = {customParams}/>
      </Col>
      );
  }
  return <Row>{toDisplay}</Row>
}

function StatCard () {
  const [timeIndx, settimeIndx] = useState(1)
  const [activeGraphType, setActiveGraphType] = useState([1,2,6,3,4,5])
  const handleChange = (val) => setActiveGraphType(val);
  const [customParams, setCustomParams] = useState({min:0,max:300});

  console.log(timeIndx)
  console.log(activeGraphType)

  useEffect(() => {
    var min = 0
    var max = 300
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
          <span>Statistiques</span>
          <ToggleButtonGroup type="checkbox"  value={activeGraphType} onChange={handleChange}>
            <ToggleButton id="tbg-btn-1" variant="outline-secondary" value={1}> Temperature </ToggleButton>
            <ToggleButton id="tbg-btn-2" variant="outline-secondary" value={2}> Humidit?? </ToggleButton>
            <ToggleButton id="tbg-btn-3" variant="outline-secondary" value={3}> Conso. Eau </ToggleButton>
            <ToggleButton id="tbg-btn-4" variant="outline-secondary" value={4}> pH Eau </ToggleButton>
            <ToggleButton id="tbg-btn-5" variant="outline-secondary" value={5}> CO2 </ToggleButton>
            <ToggleButton id="tbg-btn-6" variant="outline-secondary" value={6}> Insolation </ToggleButton>
          </ToggleButtonGroup>
          <ButtonGroup id={styles.buttonGroupDashboard}>
            <Button variant="outline-secondary" onClick={() => settimeIndx(1)} timeIndx={timeIndx === 1} active={timeIndx===1}>Temps r??el</Button>
            <Button variant="outline-secondary" onClick={() => settimeIndx(2)} timeIndx={timeIndx === 2} active={timeIndx===2}>Jour</Button>
            <Button variant="outline-secondary" onClick={() => settimeIndx(3)} timeIndx={timeIndx === 3} active={timeIndx===3}>Semaine</Button>
          </ButtonGroup>
        </div>
      </Card.Header>
      <Card.Body>
          <ActiveStatDraw activeGraphType = {activeGraphType} timeIndx = {timeIndx} customParams = {customParams}/>
      </Card.Body>
    </Card>
  );
};

function CamerasCard () {
  return (
    <Card>
      <Card.Header as="h5" className={styles.colContainer}>
        <span>Cam??ras</span>
        <FontAwesomeIcon icon={faVideo} />
      </Card.Header>
      <Card.Body>
        Cliquez ici pour visualiser vos cam??ras.
      </Card.Body>
    </Card>
  );
};

function SensorsCard () {
  return (
    <Card>
      <Card.Header as="h5" className={styles.colContainer}>
        <span>Capteurs</span>
        <FontAwesomeIcon icon={faTemperatureHigh} />
      </Card.Header>
      <Card.Body>
        Cliquez ici pour visualiser vos capteurs.
      </Card.Body>
    </Card>
  );
};

function TopologyCard () {
  return (
    <Card>
      <Card.Header as="h5" className={styles.colContainer}>
        <span>Topologie</span>
        <FontAwesomeIcon icon={faVideo} />
      </Card.Header>
      <Card.Body>
        Cliquez ici pour visualiser la topologie.
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
        <div className={styles.titleDashboard}><h1>Serre n??{id}</h1></div>
        <div className={styles.firstRow}>
          <Row>
            <Col>
              <StatCard/>
            </Col>
          </Row>
        </div>
        <Row>
          <Col className={styles.marginBottom}>
            <ClickableContainer onClick={() => navigate(`/Cameras/${id}`)}>
              <CamerasCard/>
            </ClickableContainer>
           </Col>
          <Col className={styles.marginBottom}>
            <ClickableContainer onClick={() => navigate(`/Sensors/${id}`)}>
              <SensorsCard/>
            </ClickableContainer>
          </Col>
          <Col className={styles.marginBottom}>
            <ClickableContainer onClick={() => navigate(`/Topology/${id}`)}>
              <TopologyCard/>
            </ClickableContainer>
          </Col>
        </Row>
      </CustomContainer>
    </div>
  );
}

export {ActiveStatDraw}; //for sensors page
export default Dashboard;
