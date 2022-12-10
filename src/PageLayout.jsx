import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'

function PageLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default PageLayout