import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import KittyList from './Components/KittyList';
import Home from './Components/Home';
import Navbaren from './Navbar/Nav'


function App() {
  return (
    <Router>
      <Navbaren />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kittys" element={<KittyList />} />
      </Routes>
    </Router>
  );
}

export default App;
