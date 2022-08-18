import React from 'react';
import "./Herobiz.css";
import {Link} from "react-router-dom"

function NavBar() {
  return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="#" className="navbar-brand" href="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/about" className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" >Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" >Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" >Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link" >Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="teams" className="nav-link" >Teams</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Get Started</button>
          </form>
        </div>
    </nav>
   </div>
  )
}

export default NavBar