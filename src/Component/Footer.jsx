import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className="container-fluid footer pt-1">
    <div className="d-flex pt-4">
      <div className="row">
        <div className="col-sm-6 col-lg-3  footerlg ">
          <div className='footerxs footertext ms-sm-5 mb-4'>
          <h4>Products</h4>
          <div>My Blog</div>
          <div>Website Builder</div>
          <div>Domain Names</div>
          <div>Professional Email</div>
        </div>
        </div>
        <div className="col-sm-6  col-lg-3  footerlg">
          <div className='footerxs footertext mb-4'>
          <h4>Learn</h4>
          <div>SEO Learning Hub</div>
          <div>Privacy and Security</div>
          <div>Daily Webinars</div>
        </div>
        </div>
        <div className="col-sm-6 col-lg-3  ">
          <div className='footerxs footertext ms-sm-5  mb-4'>
          <h4>Company</h4>
          <div>About</div>
          <div>Contact us</div>
          <div>Patent notice</div>
          <div>Partners</div>
          <div>Sitemap</div>
          <div>Careers</div>
        </div>
        </div>
        <div className="col-sm-6 col-lg-3 footerlg pb-4">
          <div className="footername footerxs">
            <h3 className="sitename ">MySite.com</h3>
            <p className="mt-3 footertext ">Create a website with a complete suite of advanced functionalities and bring your vision to life.
              Convert and scale seamlessly with built-in marketing and business solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='ps-4 pe-4'>
    <hr style={{color:"white"}}></hr>
    </div>
    
    <div className="d-flex justify-content-center pb-2">
      <h6 className='footertext'>Copyright <FontAwesomeIcon icon={faCopyright}/> 2022 MySite.com</h6>
    </div>  
    </div>
  )
}

export default Footer