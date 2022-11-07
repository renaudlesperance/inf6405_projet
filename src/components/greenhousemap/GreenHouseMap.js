// https://developers.google.com/maps/documentation/javascript/react-map
// https://developers.google.com/maps/documentation/javascript/get-api-key

import {useNavigate} from 'react-router-dom'
// import * as bs from 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CustomContainer from '../customContainer/CustomContainer';
import GoogleMapReact from 'google-map-react';

import './GreenHouseMap.css'
import Marker from './Marker';

const Map = ({ onClick }) => {
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
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat="45.66748438022475" lng="-73.4901313020032" onClick={onClick} id='1' />
        <Marker lat="45.445124638140015" lng="-73.57955912606486" onClick={onClick} id='2' />
        <Marker lat="45.59100471050687" lng="-73.39481140981282" onClick={onClick} id='3' />
        <Marker lat="45.56444732914071" lng="-73.96565209498677" onClick={onClick} id='4' />
        <Marker lat="45.36489328530328" lng="-73.98069306407244" onClick={onClick} id='5' />
      </GoogleMapReact>
    </div>
  )
}

// const MapButton = () => {
//   const navigate = useNavigate()
//   return (
//   <div className="d-grid gap-2">
//     <ButtonGroup aria-label="Basic example" size="lg" >
//       <Button variant="secondary" onClick={() => navigate('/Dashboard')}>Serre 1</Button>
//       <Button variant="secondary" onClick={() => navigate('/Dashboard')}>Serre 2</Button>
//       <Button variant="secondary" onClick={() => navigate('/Dashboard')}>Serre 3</Button>
//       <Button variant="secondary" onClick={() => navigate('/Dashboard')}>Serre 4</Button>
//       <Button variant="secondary" onClick={() => navigate('/Dashboard')}>Serre 5</Button>
//     </ButtonGroup>
//   </div>
//   )
// }

function GreenHouseMap() {
  const navigate = useNavigate()
  const handleClick = (id) => console.log(`clic sur ${id}`)

  return (
    <CustomContainer>
      <div className='buttonContainer'>
        <Button size="lg" variant="secondary" active>Carte des serres</Button>
      </div>
      <Map onClick={handleClick} />
    </CustomContainer>
  );
}

export default GreenHouseMap;
