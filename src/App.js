import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from "./components/Home.js"
import Login_page from "./components/Home.js"
import GreenHouseMap from "./components/GreenHouseMap.js"
import Dashboard from "./components/Dashboard.js"
import Cameras from "./components/Cameras.js"
import Sensors from "./components/Sensors.js"
import Topology from "./components/Topology.js"

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
       {/* <p> test </p> */}
       {/* ReactDOM.render(<Login_page />, document.getElementById('container')); */}
    </div>
  );
}

export default App;
