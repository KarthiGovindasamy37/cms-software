import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import * as actionCreators from '../Redux/Action Creators/PortalAction'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Sidebar() {
  
  const portal =useSelector(state=>state.portal)
  const dispatch = useDispatch()
  const {webAction,webContentsAct,blogAction} = bindActionCreators(actionCreators,dispatch)
  return (
    
    <div className="sidebar">
      <div className=" pt-4 pb-2 ps-2 pe-2 sidebar-content" onClick={webAction}>
    <h4 className="text-light sidebar-heading">Website</h4>
    {
     portal.webOpen ?
      <span className='text-white port-icon'><FontAwesomeIcon icon={faCaretDown} size="lg"/></span>
      : <span className='text-white port-icon'><FontAwesomeIcon icon={faCaretRight} size="lg"/></span>
    }
    
    </div>
    {
    portal.webOpen ? 
    <div className="web-contents">
    <div className="ps-3 pe-2 pb-1 sidebar-content" onClick={webContentsAct}>
    <h5 className='sidebar-heading'>pages</h5> 
    {
      portal.webContents ? 
      <span className='port-icon2'><FontAwesomeIcon icon={faCaretDown} size="lg"/></span>
      : <span className='port-icon2'><FontAwesomeIcon icon={faCaretRight} size="lg"/></span>
    }
    
    </div>
    {
    portal.webContents ?
    <div className="pages">
     <Link to="/portal/home" className='webLink' ><h6 className='sidebar-hover m-0 p-2 ps-3'>Home</h6></Link>
     <Link to="/portal/about" className='webLink' ><h6 className='sidebar-hover m-0 p-2 ps-3'>About</h6></Link> 
     <Link to="/portal/contact" className='webLink' ><h6 className='sidebar-hover m-0 p-2 ps-3'>Contact</h6></Link> 
    </div>
    :null
}
  </div> 
  : null
    }
    
    
    <div className=" pt-3 pb-1 ps-2 pe-2 sidebar-content " onClick={blogAction}>
    <h4 className="text-light sidebar-heading">Blog</h4>
    {
      portal.blogOpen ?
      <span className='text-white port-icon3'><FontAwesomeIcon icon={faCaretDown} size="lg"/></span>
      : <span className='text-white port-icon3'><FontAwesomeIcon icon={faCaretRight} size="lg"/></span>
    }
    
    </div>
    {
      portal.blogOpen ?
      <div className="pages">
      <Link to="/portal/myblog1" className='webLink' ><h6 className='sidebar-hover m-0 p-2 ps-3'>My blog 1</h6></Link>
      <Link to="/portal/myblog2" className='webLink' ><h6 className='sidebar-hover m-0 p-2 ps-3'>My blog 2</h6></Link>
      </div>
      : null
    }
    
   </div>
 
 
  )
}

export default Sidebar