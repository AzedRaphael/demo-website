import React from "react"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./HeroBizComponent/Home"
import About from "./HeroBizComponent/About"
import Contact from "./HeroBizComponent/Contact"
import Portfolio from './HeroBizComponent/Portfolio'
import Services from "./HeroBizComponent/Services"
import Team from "./HeroBizComponent/Team"
import NavBar from './HeroBizComponent/NavBar'


function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/team" element={<Team />}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
