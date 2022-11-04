import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from "./components/Home.js"
import GreenHouseMap from "./components/greenHouseMap.js"
import Dashboard from "./components/dashboard.js"
import Cameras from "./components/cameras.js"
import Sensors from "./components/sensors.js"
import Topology from "./components/topology.js"

const NoMatch = () => {return <div>Page not found</div>;};


function App() {
  return (
    <div className="App">
      <Router> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GreenHouseMap" element={<GreenHouseMap />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Cameras" element={<Cameras />} />
        <Route path="/Sensors" element={<Sensors />} />
        <Route path="/Topology" element={<Topology />} />
      </Routes></Router>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit ! <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;