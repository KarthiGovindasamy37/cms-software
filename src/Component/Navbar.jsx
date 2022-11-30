import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold sitename" >MySite.com</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-3">
                <Link to="/business" className="nav-link " aria-current="page" >Business</Link>
              </li>              
              <li className="nav-item dropdown ms-3">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu shadow-lg bg-body rounded" aria-labelledby="navbarDropdown">
                  <li><Link to="/productweb" className="dropdown-item" href="#">Website Builder</Link></li>
                  <li><Link to="/productblog" className="dropdown-item" href="#">Create Blog</Link></li>
                  </ul>
              </li>
              <li className="nav-item ms-3">
                <Link to="/plans" className="nav-link " aria-current="page" >Plans</Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/signup" className="btn btn-outline-success bg-primary text-white">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar