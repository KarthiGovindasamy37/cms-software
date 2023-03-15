import React from 'react'
import { useSelector } from 'react-redux'

function Topbar() {

  const{name}=useSelector(state=>state.user.user)
  const userName= name.toUpperCase()
  return (
    <div className='topbar'>
      <div className='topbar-height d-flex align-items-end justify-content-end'>
      <h4 className=''>Welcome</h4>
      <h3 className='ps-2 pe-2'>{userName}</h3>
      </div>
        
    </div>
  )
}

export default Topbar