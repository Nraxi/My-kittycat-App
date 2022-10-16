import './CSS/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import KittyList from './Components/KittyList';
import Home from './Components/Home';
import Navbaren from './Navbar/Nav'
import UserDetails from './Components/UserDetails'


function App() {
  return (
    <Router>
      <Navbaren />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kittys" element={<KittyList />} />
        <Route path="/user" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
