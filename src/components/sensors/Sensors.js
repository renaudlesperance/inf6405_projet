import React, { useEffect, useState } from 'react';
import styles from './Sensors.module.css';
import {useNavigate,useParams} from 'react-router-dom'
import BackButton from '../backButton/BackButton';
import CustomContainer from '../customContainer/CustomContainer';
import { Row, Col, Form, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faLaptopCode, faTrashCan, faWaveSquare, faWifi } from '@fortawesome/free-solid-svg-icons';
import ListGroup from '../listGroup/CustomListGroup';
import MyVerticallyCenteredModal from '../modal/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const IconAndLabel = ({ icon, value }) => (
  <div className={styles.iconAndLabel}>
    <FontAwesomeIcon icon={icon} />
    <span>{value}</span>
  </div>
)

function Sensors() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedSensor, setSelectedSensor] = useState({})
  const [modalShow, setModalShow] = useState(false)
  const [AddModalShow, setAddModalShow] = useState(false)
  const [addData, setAddData] = useState({})
  const [data, setData] = useState([
    { name: "Entrée 1", type: "Humidité", ip: "192.168.1.1", mac: "00:37:6C:E2:EB:62", modele: "SCC30-DB"},
    { name: "Entrée 2", type: "Humidité", ip: "192.168.1.2", mac: "00:37:6C:E2:EB:63", modele: "SEN-18364"},
    { name: "Entrée 3", type: "Humidité", ip: "192.168.1.3", mac: "00:37:6C:E2:EB:64", modele: "A1DU5P2CP006B"},
    { name: "Entrée 4", type: "CO2", ip: "192.168.1.4", mac: "00:37:6C:E2:EB:65", modele: "T6793"},
    { name: "Entrée 5", type: "CO2", ip: "192.168.1.5", mac: "00:37:6C:E2:EB:66", modele: "COZIR-LP-5000"},
    { name: "Allée 1", type: "CO2", ip: "192.168.1.6", mac: "00:37:6C:E2:EB:67", modele: "T3022-1-5K-5-1"},
    { name: "Allée 2", type: "pH", ip: "192.168.1.7", mac: "00:37:6C:E2:EB:68", modele: "PH8EFP"},
    { name: "Allée 3", type: "pH", ip: "192.168.1.8", mac: "00:37:6C:E2:EB:69", modele: "PH8EFP"},
    { name: "Allée 4", type: "pH", ip: "192.168.1.9", mac: "00:37:6C:E2:EB:70", modele: "100 GP-D"},
    { name: "Allée 5", type: "pH", ip: "192.168.1.10", mac: "00:37:6C:E2:EB:71", modele: "YSI 1001"},
    { name: "Sortie 1", type: "Luminosité", ip: "192.168.1.11", mac: "00:37:6C:E2:EB:72", modele: "SL2561"},
    { name: "Sortie 2", type: "Luminosité", ip: "192.168.1.12", mac: "00:37:6C:E2:EB:73", modele: "SL2561"},
    { name: "Sortie 3", type: "Luminosité", ip: "192.168.1.13", mac: "00:37:6C:E2:EB:74", modele: "SL2561"},
    { name: "Sortie 4", type: "Luminosité", ip: "192.168.1.14", mac: "00:37:6C:E2:EB:75", modele: "SL2561"},
    { name: "Sortie 5", type: "Luminosité", ip: "192.168.1.15", mac: "00:37:6C:E2:EB:76", modele: "SL2561"},
  ])

  const types = ["Humidité", "Luminosité", "pH", "CO2"]
  const modeles = [
    { type: "Humidité", modeles: ["SCC30-DB", "SEN-18364", "A1DU5P2CP006B"]},
    { type: "Luminosité", modeles: ["TSL2561", "LM393-1", "VEML7700"]},
    { type: "pH", modeles: ["PH8EFP", "100 GP-D", "YSI 1001"]},
    { type: "CO2", modeles: ["T6793", "COZIR-LP-5000","T3022-1-5K-5-1"]},
  ]

  const modelesWithRef = [
    { modele: "SCC30-DB", ref: "https://www.digikey.ca/en/products/detail/sensirion-ag/SCC30-DB/9666379", freq: "2x par minute" },
    { modele: "SEN-18364", ref: "https://www.digikey.ca/en/products/detail/sparkfun-electronics/SEN-18364/14635373", freq: "2x par minute" },
    { modele: "A1DU5P2CP006B", ref: "https://www.digikey.ca/en/products/detail/sharp-socle-technology/A1DU5P2CP006B/9678558", freq: "2x par minute" },
    { modele: "T6793", ref: "https://www.digikey.ca/en/products/detail/amphenol-advanced-sensors/T6793/16368386", freq: "2x par heure" },
    { modele: "COZIR-LP-5000", ref: "https://www.digikey.ca/en/products/detail/gas-sensing-solutions-ltd/COZIR-LP-5000/9952877", freq: "2x par heure" },
    { modele: "T3022-1-5K-5-1", ref: "https://www.digikey.ca/en/products/detail/amphenol-advanced-sensors/T3022-1-5K-5-1/9997294", freq: "2x par heure" },
    { modele: "PH8EFP", ref: "https://www.yokogawa.com/solutions/products-and-services/measurement/analyzers/liquid-analyzers/ph-sensors/phorp-sensors-ph8efp-ph8erp-or8efg-or8erg/#Details__Features", freq: "6x par minute" },
    { modele: "100 GP-D", ref: "https://new.abb.com/products/measurement-products/analytical/continuous-water-analysis/ph-orp-measurement/ph-orp-sensors/100-gp-d-ph-redox-(orp)-sensor9", freq: "6x par minute" },
    { modele: "YSI 1001", ref: "https://www.ysi.com/product/id-605101/pro-series-1001-ph-sensor", freq: "6x par minute" },
    { modele: "TSL2561", ref: "https://learn.adafruit.com/tsl2561", freq: "6x par minute" },
    { modele: "VEML7700", ref: "https://store.rakwireless.com/products/wisblock-ambient-light-sensor-rak12010", freq: "6x par minute" },
    { modele: "LM393-1", ref: "https://grabcad.com/library/light-sensor-lm393-1", freq: "6x par minute" },
  ]

  const onDelete = () => {
    setData(data.filter(sensor => JSON.stringify(sensor) !== JSON.stringify(selectedSensor)))
    setSelectedSensor({})
    setModalShow(false)
  }

  const onAdd = () => {
    const ip = `192.168.${Math.floor(Math.random() * 200) + 1}.${Math.floor(Math.random() * 200) + 1}`
    const mac = `00:${Math.floor(Math.random() * 99) + 10}:6C:E2:EB:${Math.floor(Math.random() * 99) + 10}`
    setData([{ ...addData, ip, mac }, ...data ])
    setAddData({})
    setSelectedSensor({ ...addData, ip, mac })
    setAddModalShow(false)
  }

  const handleChange = (evt) => {
    setAddData({ ...addData, [evt.target.name]: evt.target.value })
  }

  return (
    <div>
      <BackButton onClick={() => navigate(`/Dashboard/${id}`)} />
      <CustomContainer>
        <div className={styles.titleDashboard}><h1>Capteurs de la serre n°{id}</h1></div>
        <Row>
          <Col sm={9} className={styles.sensorContainer}>
            {Object.keys(selectedSensor).length === 0 ? (
              <div className={styles.sensorNotSelected}>
                <p>Cliquer sur un capteur de la liste pour visualiser son fonctionnement.</p>
              </div>
            ) : (
              <div>
                <div className={styles.headerSensor}>
                  <span><b>{selectedSensor.name}</b></span>
                  <FontAwesomeIcon icon={faTrashCan} onClick={() => setModalShow(true)} className={styles.icon} />
                </div>
                <div className={`${styles.flex} ${styles.typeSensor}`}>
                  <p><b>Type du capteur : </b>{selectedSensor.type}</p>
                  <p>
                    <span className={styles.modeleInfo}><b>Modèle : </b>{selectedSensor.modele}</span>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">En cliquant ici, vous accéderez sur le site du constructeur.</Tooltip>}
                    >
                      <a href={modelesWithRef.filter(elt => elt.modele === selectedSensor.modele)[0].ref} target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </a>
                    </OverlayTrigger>
                  </p>
                </div>
                <div className={styles.flex}>
                  <IconAndLabel icon={faWifi} value={selectedSensor.ip} />
                  <IconAndLabel icon={faLaptopCode} value={selectedSensor.mac} />
                  <IconAndLabel icon={faWaveSquare} value={modelesWithRef.filter(elt => elt.modele === selectedSensor.modele)[0].freq} />
                </div>
              </div>
            )}
          </Col>
          <Col sm={3}>
            <ListGroup
              data={data}
              onAdd={() => setAddModalShow(true)}
              onClick={setSelectedSensor}
              selectedItem={selectedSensor}
              title='Capteurs disponibles'
              withIcons
            />
          </Col>
        </Row>
      </CustomContainer>
      <MyVerticallyCenteredModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        handleClick={onDelete}
        title={`Suppresion du capteur ${selectedSensor.name}`}
        buttonTextOk='Supprimer'
      >
        <p>Êtes-vous sur de vouloir supprimer ce capteur ?</p>
      </MyVerticallyCenteredModal>
      <MyVerticallyCenteredModal
        show={AddModalShow}
        handleClose={() => setAddModalShow(false)}
        handleClick={onAdd}
        title={`Ajout d'un nouveau capteur`}
        buttonTextOk='Ajouter'
      >
        <Form.Group className="mb-3">
          <Form.Label>Nom du capteur</Form.Label>
          <Form.Control type="text" placeholder="Saisir le nom de votre capteur" name='name' onChange={handleChange} autoFocus />
          <Form.Text className="text-muted">
            Ce nom permettra de définir votre capteur sur l'application.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Choisissez le type de votre capteur</Form.Label>
          <Form.Select aria-label="Default select example" name='type' onChange={handleChange}>
            <option>Choisissez le type de votre capteur</option>
            {types.map(type => (
            <option value={type}>{type}</option>
          ))}
          </Form.Select>
        </Form.Group>
        {addData?.type && (
          <Form.Group className="mb-3">
            <Form.Label>Choisissez le modèle de votre capteur</Form.Label>
            <Form.Select aria-label="Default select example" name='modele' onChange={handleChange}>
              <option>Choisissez le modèle de votre capteur</option>
              {modeles.filter(mod => mod.type === addData.type)[0].modeles.map(mod => (
              <option value={mod}>{mod}</option>
            ))}
            </Form.Select>
          </Form.Group>
        )}
      </MyVerticallyCenteredModal>
    </div>
  );
}

export default Sensors;
