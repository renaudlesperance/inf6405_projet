import React, { useState } from 'react';
import styles from './Cameras.module.css'
import BackButton from '../backButton/BackButton';
import CustomContainer from '../customContainer/CustomContainer';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ListGroup from '../listGroup/CustomListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import MyVerticallyCenteredModal from '../modal/Modal';
import { Form, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

function Cameras() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedCamera, setSelectedCamera] = useState({})
  const [modalShow, setModalShow] = useState(false)
  const [AddModalShow, setAddModalShow] = useState(false)
  const [addData, setAddData] = useState({})
  const [activeButtons, setActiveButtons] = useState([1])
  const handleToggle = val => setActiveButtons(val)

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
    setData(data.filter(camera => JSON.stringify(camera) !== JSON.stringify(selectedCamera)))
    setSelectedCamera({})
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

  const clickOnList = (camera) => {
    setSelectedCamera(camera)
    setActiveButtons([1])
  }

  return (
    <div>
      <BackButton onClick={() => navigate(`/Dashboard/${id}`)} />
      <CustomContainer>
        <div className={styles.titleDashboard}><h1>Caméras de la serre n°{id}</h1></div>
        <Row>
          <Col sm={9} className={styles.cameraContainer}>
            {Object.keys(selectedCamera).length === 0 ? (
              <div className={styles.cameraNotSelected}>
                <p>Cliquer sur une caméra de la liste pour visualiser son fonctionnement.</p>
              </div>
            ) : (
              <div>
                <div className={styles.headerCamera}>
                  <span><b>{selectedCamera.name}</b></span>
                  <ToggleButtonGroup type="checkbox"  value={activeButtons} onChange={handleToggle}>
                    <ToggleButton id="tbg-btn-1" variant="secondary" value={1}>Classique</ToggleButton>
                    <ToggleButton id="tbg-btn-2" variant="secondary" value={2}>Infrarouge</ToggleButton>
                  </ToggleButtonGroup>
                  <FontAwesomeIcon icon={faTrashCan} onClick={() => setModalShow(true)} className={styles.icon} />
                </div>
                <Row>
                  {activeButtons.includes(1) && (
                    <Col className={styles.cameraInfoCol}>
                      Hello
                    </Col>
                  )}
                  {activeButtons.includes(2) && (
                    <Col className={styles.cameraInfoCol}>
                      Hello
                    </Col>
                  )}
                  {!activeButtons.includes(1) && !activeButtons.includes(2) && (
                    <Col className={styles.cameraInfoCol}>
                      Veuillez sélectionner un mode d'affichage.
                    </Col>
                  )}
                </Row>
              </div>
            )}
          </Col>
          <Col sm={3}>
            <ListGroup
              data={data}
              onAdd={() => setAddModalShow(true)}
              onClick={clickOnList}
              selectedItem={selectedCamera}
              title='Caméras disponibles'
            />
          </Col>
        </Row>
      </CustomContainer>
      <MyVerticallyCenteredModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        handleClick={onDelete}
        title={`Suppresion de la caméra ${selectedCamera.name}`}
        buttonTextOk='Supprimer'
      >
        <p>Êtes-vous sur de vouloir supprimer cette caméra ?</p>
      </MyVerticallyCenteredModal>
      <MyVerticallyCenteredModal
        show={AddModalShow}
        handleClose={() => setAddModalShow(false)}
        handleClick={onAdd}
        title={`Ajout d'une nouvelle caméra`}
        buttonTextOk='Ajouter'
      >
        <Form.Group className="mb-3">
          <Form.Label>Nom de la caméra</Form.Label>
          <Form.Control type="text" placeholder="Saisir le nom de votre caméra" name='name' onChange={handleChange} />
          <Form.Text className="text-muted">
            Ce nom permettra de définir votre caméra sur l'application.
          </Form.Text>
        </Form.Group>
      </MyVerticallyCenteredModal>
    </div>
  );
}

export default Cameras;
