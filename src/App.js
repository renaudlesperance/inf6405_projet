import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes,Route,Link} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home.js"
import GreenHouseMap from "./components/greenhousemap/GreenHouseMap.js"
import Dashboard from "./components/dashboard/Dashboard.js"
import Cameras from "./components/cameras/Cameras.js"
import Sensors from "./components/sensors/Sensors.js"
import Topology from "./components/topology/Topology.js"
import PageNotFound from "./components/pagenotfound/PageNotFound.js"

const NoMatch = () => {return <div>Page not found</div>;};


function App() {
  return (
    <div className="App">
      <Router basename="/inf6405_projet"> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GreenHouseMap" element={<GreenHouseMap />} />
        <Route path="/Dashboard/:id" element={<Dashboard />}/>
        <Route path="/Cameras/:id" element={<Cameras />} />
        <Route path="/Sensors/:id" element={<Sensors />} />
        <Route path="/Topology/:id" element={<Topology />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes></Router>
       {/* <p> test </p> */}
       {/* ReactDOM.render(<Login_page />, document.getElementById('container')); */}
    </div>
  );
}

export default App;
