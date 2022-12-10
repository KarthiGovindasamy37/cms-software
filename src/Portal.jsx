import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'
import PortalNavbar from './Component/PortalNavbar'
import Sidebar from './Component/Sidebar'
import Topbar from './Component/Topbar'
import Typobar from './Component/Typobar'

function Portal() {
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