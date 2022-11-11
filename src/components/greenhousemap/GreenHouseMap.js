// https://developers.google.com/maps/documentation/javascript/react-map
// https://developers.google.com/maps/documentation/javascript/get-api-key
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CustomContainer from '../customContainer/CustomContainer';
import GoogleMapReact from 'google-map-react';
import MyVerticallyCenteredModal from '../modal/Modal';
import styles from './GreenHouseMap.module.css';
import Marker from './Marker';

const Map = () => {
  const navigate = useNavigate()
  const [modalShow, setModalShow] = useState(false)
  const [coordinates, setCoordinates] = useState({})

  const [markers, setMarkers] = useState([
    { lat: "45.66748438022475", lng: "-73.4901313020032"},
    { lat: "45.445124638140015", lng: "-73.57955912606486"},
    { lat: "45.59100471050687", lng: "-73.39481140981282"},
    { lat: "45.56444732914071", lng: "-73.96565209498677"},
    { lat: "45.36489328530328", lng: "-73.98069306407244"},
  ])

  const onClick = (id) => {
    return (
      navigate(`/Dashboard/${id}`)
    )
  }

  const defaultProps = {
    center: {
      lat: 45.66748438022475,
      lng: -73.4901313020032
    },
    zoom: 10
  };

  const onAdd = () => {
    setMarkers([...markers, coordinates])
    setModalShow(false)
  }

  const handleMapClick = evt => {
    setCoordinates({ lat: evt.lat, lng: evt.lng })
    setModalShow(true)
  }

  return (
    <div style={{ height: '80vh', width: '100%', marginBottom: 16 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker lat={marker.lat} lng={marker.lng} onClick={() => onClick(index+1)} key={Math.random()} />
        ))}

      </GoogleMapReact>
      <MyVerticallyCenteredModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        handleClick={onAdd}
        title={`Ajout d'un emplacement`}
        buttonTextOk='Ajouter'
      >
        <p>Êtes-vous sur de vouloir ajouter l'emplacement suivant :</p>
        <ul>
          <li>{`Longitude : ${coordinates.lng}`}</li>
          <li>{`Latitude : ${coordinates.lat}`}</li>
        </ul>
      </MyVerticallyCenteredModal>
    </div>
  )
}

function GreenHouseMap() {
  return (
    <CustomContainer withMargin>
      <div className={styles.buttonContainer}>
        <Button size="lg" variant="secondary" active>
          <span className={styles.title}>Carte des serres :</span>
          <span className={styles.instruction}> Si vous souhaitez ajouter une serre, cliquez sur l'emplacement désiré.</span>
        </Button>
      </div>
      <Map />
    </CustomContainer>
  );
}

export default GreenHouseMap;
