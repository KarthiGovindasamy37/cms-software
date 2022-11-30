import React from 'react'
import { Link } from 'react-router-dom'

function ProductBlogPage() {
  return (
    <div className="blog-page">
     <div className="row g-0 pt-5 mt-2">
      <div className="col-lg-7 p-2 p-sm-5">
       <h1 className="text-center pt-3 pb-3 blog-h1">Write a blog that inspires.</h1>
       <h5 className="text-center">Start publishing your unique content with a rich text editor and 
        video and audio add-ons.Write when you feel inspired and schedule posts to go
         live at the best time for you.</h5>
       <div className="d-flex justify-content-center pt-5">
        <Link to="/signup" className='btn btn-dark blog-btn btn-xs-width' style={{borderRadius:"27px"}}><h5 className='pt-2'>Start Blogging</h5></Link>
       </div>
    </div>
      <div className="col-lg-5">
        <img className="blog-img" src="/images/pageimages/blogimg3.png" alt="Blog template"/>
       </div>
       <div className="col-lg-7">
         <img className="blog-img1" src="/images/pageimages/blogimg2.png" alt="Blog template"/>
       </div>
       <div className="col-lg-5 p-md-5">
        <h1 className="text-center blog-h1">Monetize your blog</h1>
        <div className="ps-md-5 pt-3">
            <ul>
                <li><h4>Host paid events </h4></li>
                <li><h4>Offer subscriptions</h4></li>
                <li><h4>Sell online </h4></li>
                <li><h4>Display ads</h4></li>
            </ul>
        </div>
       </div>
      </div>
 </div>
  )
}

export default ProductBlogPage