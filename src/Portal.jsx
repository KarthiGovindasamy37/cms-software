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

    <div class="container-fluid mt-5 pt-2">
      <div class="row ">
        <div class="col-2 g-0">
            <Sidebar/>
            </div>
            <div class="col-10 g-0">
              <Topbar/>
            
            <div class="d-flex">
                    <div class="col-9">
                      <Outlet/>
                    </div>
                    <div class="col-3">
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