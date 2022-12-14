import {Card, Row, Col,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'
import styles from './Topology.module.css';
import {useNavigate,useParams} from 'react-router-dom'
import BackButton from '../backButton/BackButton';
import CustomContainer from '../customContainer/CustomContainer';
import React, { useState } from 'react';

import baseTopologie from '../../Images/Topologie-Eau.drawio.png'
import topo_cam from '../../Images/Topologie-Eau+Caméra.drawio.png'
import topo_sensor from '../../Images/Topologie-Eau+capteur.drawio.png'
import topo_cam_sensor from '../../Images/Topologie-Eau+Capteur+Cam.drawio.png'


function Topology() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTopo, setActiveTopo] = useState([1])
  const handleChange = (val) => setActiveTopo(val);

  // for Image from Google Drive
  const urlBaseTopo= "11EfkeOFVCeBmkJB7c0faLktL-xenZygu"
  const urlTopoCapteur= "1vXI4-HiO9hTw6K2II8cnU-_1W0mXuIT8"
  const urlTopoCameras= "17Pv5-2HmaPLv9BDHo55fEy2VL5lvboMb"
  const urlTopoCapteurCameras= "12v8qtDMkSTufQSYgjlKsZgkebuMNIfQi"

  return (
    <div>
      <BackButton onClick={() => navigate(`/Dashboard/${id}`)} />
      <CustomContainer>
        <div className={styles.title}><h1>Topologie de la serre n°{id}</h1></div>
        <Row>
          <Col className={styles.topoContainer}>
            <Card>
              <Card.Header as="h5">
                <div className={styles.headerCardDashboard}>
                  <ToggleButtonGroup type="checkbox"  value={activeTopo} onChange={handleChange}>
                    <ToggleButton id="tbg-btn-1" variant="outline-secondary" value={1} disabled> Irrigation </ToggleButton>
                    <ToggleButton id="tbg-btn-2" variant="outline-secondary" value={2}> Capteurs </ToggleButton>
                    <ToggleButton id="tbg-btn-3" variant="outline-secondary" value={3}> Caméras </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </Card.Header>
              <Card.Body className={styles.align}>
                  {!activeTopo.includes(2) && !activeTopo.includes(3) &&(<img src={baseTopologie} className={styles.photo95}/>)}
                  {activeTopo.includes(2) && !activeTopo.includes(3) &&(<img src={topo_sensor} className={styles.photo95}/>)}
                  {!activeTopo.includes(2) && activeTopo.includes(3) &&(<img src={topo_cam} className={styles.photo95}/>)}
                  {activeTopo.includes(2) && activeTopo.includes(3) &&(<img src={topo_cam_sensor} className={styles.photo95}/>)}

                  {/* Images from Google Drive */}
                  {/* {!activeTopo.includes(2) && !activeTopo.includes(3) &&(<img src={"https://drive.google.com/uc?export=view&id="+urlBaseTopo} className={styles.photo95}/>)}
                  {activeTopo.includes(2) && !activeTopo.includes(3) &&(<img src={"https://drive.google.com/uc?export=view&id="+urlTopoCapteur} className={styles.photo95}/>)}
                  {!activeTopo.includes(2) && activeTopo.includes(3) &&(<img src={"https://drive.google.com/uc?export=view&id="+urlTopoCameras} className={styles.photo95}/>)}
                  {activeTopo.includes(2) && activeTopo.includes(3) &&(<img src={"https://drive.google.com/uc?export=view&id="+urlTopoCapteurCameras} className={styles.photo95}/>)} */}
              </Card.Body>

            </Card>
          </Col>
        </Row>
      </CustomContainer>
    </div>
  );
}

export default Topology;
