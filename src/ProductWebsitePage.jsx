import React from 'react'
import { Link } from 'react-router-dom'

function ProductWebsitePage() {
  return (
    <div className="webpage-div">
    <div className="d-flex justify-content-center flex-wrap pt-5">
      <div className="col-md-6 pt-5">
        <h1 className="text-center website-h1">Build a website that grows with you,get
        expert help when you need it.</h1>
        <h5 className="text-center text-dark pt-4">Design a website that's all you. MySite.com themes have the perfect look for any website with hundreds of different
           designs, color schemes, and mobile-friendly layouts to choose from.
           So you can focus on sharing your work, growing your audience, and 
           even making money.
        </h5>
        <div className="d-flex justify-content-center pt-4">
          <Link to="/signup" className="btn btn-primary website-btn btn-xs-width pt-2" style={{borderRadius:"27px"}}><h6 className='pt-2'>Start your website</h6></Link>
        </div>
          </div>
          <div className="col-md-10 pt-4  pb-5">
            <img className="website-img" src="/images/pageimages/webimg.png" alt="Website template"/>
           </div>
    </div>
 </div>
  )
}

export default ProductWebsitePage