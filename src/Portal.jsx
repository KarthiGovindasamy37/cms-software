import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Component/Footer'
import PortalNavbar from './Component/PortalNavbar'
import Sidebar from './Component/Sidebar'
import Topbar from './Component/Topbar'
import Typobar from './Component/Typobar'
import { authorize } from './Redux/Action Creators/PortalAction'

function Portal() {

const {authError} = useSelector(state => state.portal)
const dispatch = useDispatch()

let navigate = useNavigate()

useEffect(()=>{ 
if(!authError)dispatch(authorize())
},[])

useEffect(() => {
if(authError) navigate("/")
},[authError])

  return (
    <div>
    <PortalNavbar/>

    <div className="container-fluid mt-5 pt-2">
      <div className="row ">
        <div className="col-2 g-0">
            <Sidebar/>
            </div>
            <div className="col-10 g-0">
              <Topbar/>
            
            <div className="d-flex">
                    <div className="col-9">
                      <Outlet/>
                    </div>
                    <div className="col-3">
                      <Typobar/>
                    </div>

                   </div>
                  
                  </div>
            </div>
            </div>
            
            
            

             <Footer/>
            </div>
  )
}

export default Portal