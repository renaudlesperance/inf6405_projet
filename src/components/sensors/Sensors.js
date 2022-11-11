import React, { useState } from 'react';
import styles from './Sensors.module.css';
import {useNavigate,useParams} from 'react-router-dom'
import BackButton from '../backButton/BackButton';
import CustomContainer from '../customContainer/CustomContainer';
import { Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ListGroup from '../listGroup/CustomListGroup';
import MyVerticallyCenteredModal from '../modal/Modal';

function Sensors() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedSensor, setSelectedSensor] = useState({})
  const [modalShow, setModalShow] = useState(false)
  const [AddModalShow, setAddModalShow] = useState(false)
  const [addData, setAddData] = useState({})
  const [data, setData] = useState([
    { name: "Entrée 1"},
    { name: "Entrée 2"},
    { name: "Entrée 3"},
    { name: "Entrée 4"},
    { name: "Entrée 5"},
    { name: "Allée 1"},
    { name: "Allée 2"},
    { name: "Allée 3"},
    { name: "Allée 4"},
    { name: "Allée 5"},
    { name: "Sortie 1"},
    { name: "Sortie 2"},
    { name: "Sortie 3"},
    { name: "Sortie 4"},
    { name: "Sortie 5"},
  ])

  const onDelete = () => {
    setData(data.filter(sensor => JSON.stringify(sensor) !== JSON.stringify(selectedSensor)))
    setSelectedSensor({})
    setModalShow(false)
  }

  const onAdd = () => {
    setData([...data, addData])
    setAddData({})
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
                <div>
                  HELLO
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
          <Form.Control type="text" placeholder="Saisir le nom de votre capteur" name='name' onChange={handleChange} />
          <Form.Text className="text-muted">
            Ce nom permettra de définir votre capteur sur l'application.
          </Form.Text>
        </Form.Group>
      </MyVerticallyCenteredModal>
    </div>
  );
}

export default Sensors;
