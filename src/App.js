
import './CSS/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Kittys from './Components/Kittys';
import Home from './Components/Home';
import Nav from './Navbar/Nav'



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kittys" element={<Kittys />} />
      </Routes>
    </Router>
  );
}

export default App;
