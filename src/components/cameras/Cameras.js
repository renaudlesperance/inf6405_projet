import React, { useState } from 'react';
import styles from './Cameras.module.css'
import BackButton from '../backButton/BackButton';
import CustomContainer from '../customContainer/CustomContainer';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Tooltip } from 'react-bootstrap';
import ListGroup from '../listGroup/CustomListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import MyVerticallyCenteredModal from '../modal/Modal';
import { Form, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function Cameras() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedCamera, setSelectedCamera] = useState({})
  const [modalShow, setModalShow] = useState(false)
  const [AddModalShow, setAddModalShow] = useState(false)
  const [addData, setAddData] = useState({ id: 1, type: 'caméra' })
  const [activeButtons, setActiveButtons] = useState([1])
  const handleToggle = val => setActiveButtons(val)

  const [data, setData] = useState([
    { id:1, type: "caméra", name: "Entrée 1", modele: "BX2567"},
    { id:1, type: "caméra",name: "Entrée 2", modele: "BX2567"},
    { id:2, type: "caméra", name: "Entrée 3", modele: "BX2567"},
    { id:1, type: "caméra",name: "Entrée 4", modele: "BX2567"},
    { id:1, type: "caméra",name: "Entrée 5", modele: "BX2567"},
    { id:1, type: "caméra",name: "Allée 1", modele: "BX2567"},
    { id:1, type: "caméra",name: "Allée 2", modele: "BX2567"},
    { id:1, type: "caméra",name: "Allée 3", modele: "BX2567"},
    { id:1, type: "caméra",name: "Allée 4", modele: "BX2567"},
    { id:1, type: "caméra",name: "Allée 5", modele: "BX2567"},
    { id:1, type: "caméra",name: "Sortie 1", modele: "BX2567"},
    { id:1, type: "caméra",name: "Sortie 2", modele: "BX2567"},
    { id:1, type: "caméra",name: "Sortie 3", modele: "BX2567"},
    { id:1, type: "caméra",name: "Sortie 4", modele: "BX2567"},
    { id:1, type: "caméra",name: "Sortie 5", modele: "BX2567"},
  ])

  const modeles = [
    { value: "BX3000", resolution: "2160p", ref: "" },
    { value: "BX2567", resolution: "1080p", ref: "https://google.com" },
    { value: "BX2512", resolution: "720p", ref: "" },
    { value: "BX23", resolution: "480p", ref: "" },
    { value: "BX23", resolution: "480p", ref: "" },
  ]

  const onDelete = () => {
    setData(data.filter(camera => JSON.stringify(camera) !== JSON.stringify(selectedCamera)))
    setSelectedCamera({})
    setModalShow(false)
  }

  const onAdd = () => {
    setData([addData, ...data])
    setSelectedCamera(addData)
    setAddData({ id: 1, type: 'caméra' })
    setAddModalShow(false)
  }

  const handleChange = (evt) => {
    setAddData({ ...addData, [evt.target.name]: evt.target.value })
  }

  const clickOnList = (camera) => {
    setSelectedCamera(camera)
    setActiveButtons([1])
  }

  const normalImgID= ["1Z1Bmj6aOsd6h9O2GDpsn4NWbwldE8uuK","1nDltrbaZDElaB7vRrsETNayT1WBH9c96","1Xx2FUt4d24MWuDrSsAUkhbOVHjrweoC9",""]
  const infraRImgID= ["1plDlllUqbt8rh-lwbTq49pQ09DtN5oyD","16-WHjMW4pJOD69W6QKNxbRR87x-SzlQG","1FbHck8bMAX0b_U_2Bhc9bk7FliM3mabr",""]
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
                <div className={styles.info}>
                  <p>
                    <span className={styles.modeleInfo}><b>Modèle : </b>{selectedCamera.modele}</span>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">En cliquant ici, vous accéderez sur le site du constructeur.</Tooltip>}
                    >
                      <a href={modeles.filter(elt => elt.value === selectedCamera.modele)[0].ref} target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </a>
                    </OverlayTrigger>
                  </p>
                  <p><b>Résolution : </b>{modeles.filter(elt => elt.value === selectedCamera.modele)[0].resolution}</p>
                </div>
                <Row>
                  {activeButtons.includes(1) && !activeButtons.includes(2) &&(
                    <Col className={styles.cameraInfoCol}>
                      <img src={"https://drive.google.com/uc?export=view&id="+normalImgID[selectedCamera.id]} className={styles.photo100}/>
                    </Col>
                  )}
                  {activeButtons.includes(2) && !activeButtons.includes(1) && (
                    <Col className={styles.cameraInfoCol}>
                      <img src={"https://drive.google.com/uc?export=view&id="+infraRImgID[selectedCamera.id]} className={styles.photo100}/>
                    </Col>
                  )}
                  {activeButtons.includes(1) && activeButtons.includes(2) && (
                    <Col className={styles.cameraInfoCol}>
                      <img src={"https://drive.google.com/uc?export=view&id="+normalImgID[selectedCamera.id]} className={styles.photo50}/>
                      <img src={"https://drive.google.com/uc?export=view&id="+infraRImgID[selectedCamera.id]} className={styles.photo50}/>
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
              withIcons
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
          <Form.Control type="text" placeholder="Saisir le nom de votre caméra" name='name' onChange={handleChange} autoFocus />
          <Form.Text className="text-muted">
            Ce nom permettra de définir votre caméra sur l'application.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Modèle de la caméra</Form.Label>
          <Form.Select aria-label="Default select example" name='modele' onChange={handleChange}>
            <option>Choisissez votre modèle</option>
            {modeles.map(modele => (
              <option value={modele.value}>{`${modele.value}  --  ${modele.resolution}`}</option>
            ))}
          </Form.Select>
        </Form.Group>

      </MyVerticallyCenteredModal>
    </div>
  );
}

export default Cameras;
