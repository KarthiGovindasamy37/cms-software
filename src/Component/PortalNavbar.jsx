import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreators from '../Redux/Action Creators/LoginAction'

function PortalNavbar() {

  const logoutInfo = useSelector(state=>state.user)
  
  const dispatch = useDispatch()
  const{ logoutAct,logoutUser }= bindActionCreators(actionCreators,dispatch)

  let navigate=useNavigate()
  useEffect(()=>{
    if(logoutInfo.user.isLoggedin === false) navigate("/")
  },[logoutInfo])
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <Link to="/portal" className="navbar-brand fw-bold sitename" >MySite.com</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ms-lg-3">
            <Link to="/business" className="nav-link " aria-current="page" >Business</Link>
          </li>              
          <li className="nav-item dropdown ms-lg-3">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul className="dropdown-menu shadow-lg bg-body rounded" aria-labelledby="navbarDropdown">
              <li><Link to="/productweb" className="dropdown-item" href="#">Website Builder</Link></li>
              <li><Link to="/productblog" className="dropdown-item" href="#">Create Blog</Link></li>
              </ul>
          </li>
          <li className="nav-item ms-lg-3">
            <Link to="/plans" className="nav-link " aria-current="page" >Plans</Link>
          </li>
        </ul>
        <div className="d-flex flex-column">
                <div className='pt-2 ps-3'>
                <div className=" user-icon" onClick={logoutAct} ><FontAwesomeIcon icon={faUser} size="xl"/></div>
                </div>
                {
                 logoutInfo.logoutLink ?
                 <div className='logout-div logout mt-1' onClick={logoutUser}>Logout</div>
                 : null
                }
                
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default PortalNavbar