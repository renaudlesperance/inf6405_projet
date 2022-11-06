// https://developers.google.com/maps/documentation/javascript/react-map
// https://developers.google.com/maps/documentation/javascript/get-api-key

import {StaticGoogleMap,Marker,} from 'react-static-google-map';
import {useNavigate} from 'react-router-dom'
// import * as bs from 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function GreenHouseMapForm() {
  return (
    <form id="GreenHouseMapForm">
      <div className="d-grid gap-2">
      <Button size="lg" variant="secondary" active>Carte des serres</Button>
      </div>
      <FormMap Mapsize = "900x900" center = "45.66748438022475, -73.4901313020032"/>
    </form>
  );
}

const FormMap = ({Mapsize,center,zoom}) => {
  return (  
  <div>
    <StaticGoogleMap size={Mapsize} scale = "1" className="img-fluid" apiKey="AIzaSyCABHoayGp9RedcFVhUWaI-RaZUzh99avA">
      <Marker location="45.66748438022475, -73.4901313020032" color="green" label="1" />
      <Marker location="45.445124638140015, -73.57955912606486" color="green" label="2" />
      <Marker location="45.59100471050687, -73.39481140981282" color="green" label="3" />
      <Marker location="45.56444732914071, -73.96565209498677" color="green" label="4" />
      <Marker location="45.36489328530328, -73.98069306407244" color="green" label="5" />
    </StaticGoogleMap>
    <MapButton/>
</div>
)
}
 
// onClick={navigate('/Dashboard')
const MapButton = () => {
  const navigate = useNavigate()
  return (
  <div className="d-grid gap-2">
    <ButtonGroup aria-label="Basic example" size="lg" >
      <Button variant="secondary" onClick={() => navigate('/Dashboard')}>Serre 1</Button>
      <Button variant="secondary" onClick={() => navigate('/Dashboard')}>Serre 2</Button>
      <Button variant="secondary" onClick={() => navigate('/Dashboard')}>Serre 3</Button>
      <Button variant="secondary" onClick={() => navigate('/Dashboard')}>Serre 4</Button>
      <Button variant="secondary" onClick={() => navigate('/Dashboard')}>Serre 5</Button>
    </ButtonGroup>
  </div>
  )

}

function GreenHouseMap() {
  return (
    <div className="GreenHouseMap">
      <GreenHouseMapForm/>
    </div>
  );
}

export default GreenHouseMap;

// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.031 };
//   // The map, centered at Uluru
//   const map = new window.google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new window.google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// window.initMap = initMap;


// function GreenHouseMap(){

//   return (
//     <div id="map">
//       <initMap/>
//     </div>
//   );
// };

// export default GreenHouseMap;