import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Astrology from "./components/Astrology";
import Homepage from "./pages/Homepage";
import Horoscope from "./pages/Horoscope";
import Tarrot from "./pages/Tarrot";
import "./css/routing.css";

const Routing = () => {
  return (
    <div>
      <Router>
        <div className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Horoscope">Horoscope</Link>
            </li>
            <li>
              <Link to="/Tarrot">Tarrot</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
          </ul>
        </div>
        <Astrology />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<b>Page not found</b>} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/tarrot" element={<Tarrot />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
