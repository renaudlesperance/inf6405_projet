// https://developers.google.com/maps/documentation/javascript/react-map
// https://developers.google.com/maps/documentation/javascript/get-api-key

import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CustomContainer from '../customContainer/CustomContainer';
import GoogleMapReact from 'google-map-react';

import styles from './GreenHouseMap.module.css';
import Marker from './Marker';

const Map = () => {
  const navigate = useNavigate()

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

  return (
    <div style={{ height: '80vh', width: '100%', marginBottom: 16 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat="45.66748438022475" lng="-73.4901313020032" onClick={() => onClick(1)} id='1' />
        <Marker lat="45.445124638140015" lng="-73.57955912606486" onClick={() => onClick(2)} id='2' />
        <Marker lat="45.59100471050687" lng="-73.39481140981282" onClick={() => onClick(3)} id='3' />
        <Marker lat="45.56444732914071" lng="-73.96565209498677" onClick={() => onClick(4)} id='4' />
        <Marker lat="45.36489328530328" lng="-73.98069306407244" onClick={() => onClick(5)} id='5' />
      </GoogleMapReact>
    </div>
  )
}

function GreenHouseMap() {
  return (
    <CustomContainer>
      <div className={styles.buttonContainer}>
        <Button size="lg" variant="secondary" active>Carte des serres</Button>
      </div>
      <Map />
    </CustomContainer>
  );
}

export default GreenHouseMap;
