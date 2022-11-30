import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

function BusinessPage(){
    return(
      <div className='businessmain-div'>
      <div className="business-div ">
       <h2 className="text-center pt-2">Fitness</h2>
      </div>
      <div className="busfit1">
          <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6">
              
                <div className="ps-lg-5 pt-5 busfit-text">
                <h1 className="busfit-h1">Boost your</h1>
                <h1 className="busfit-h1">productivity</h1>
                <h4 className="pt-4">Run your entire fitness business</h4>
                <h4>from a single dashboard.</h4>
                
                <ul className="pt-4">
                  <li><p>Easily coordinate your class schedule and empower staff to manage theirs</p></li>
                  <li><p>Streamline your workflow with an integrated CRM solution</p></li>
                  <li><p>Communicate with site visitors via live chat</p></li>
                  <li><p>Track business goals with detailed reports</p></li>
                </ul>
                
                <div className="buslets-div d-flex justify-content-end">
                 <Link to="/signup" className='buslets-btn'> <h4 className="buslets-text ">Let's Build <FontAwesomeIcon icon={faChevronRight}/><FontAwesomeIcon icon={faChevronRight}/></h4></Link>
                </div>
              </div>
              
      
            </div>
            <div className="col-lg-6 busfit2">
              <div className="d-flex justify-content-center">
                <div>
                  <img className="busfit3" src="/images/pageimages/busfitness2.jpg" alt="Fitness template"/>
      
                </div>
                
              </div>
      
            </div>
          </div>
          </div>
        </div>

        <div className="business-div2">
          <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6">
              <img className="busfit4 pt-5 ps-lg-5 pe-lg-5" src="/images/pageimages/busfitness.jpg" alt="Fitness template"/>
             <div className="ps-lg-5 pt-5">
              <div className="d-flex">
                <div className="col-6">
                  <h2 className="pb-2">Build your brand</h2>
                  <hr className="fitness-hr"/>
                  <ul className="pt-2 fitness-ul">
                    <li>Lead-driving website</li>
                    <li>Branded mobile app</li>
                    <li>Live streams & VOD </li>
                    <li>Online challenge programs</li>
                    <li>Memberships and packages</li>
                    <li>Online scheduling & payments</li>
                  </ul>
                </div>
                <div className="col-6">
                  <h2 className="pb-2">Grow your business</h2>
                  <hr className="fitness-hr"/>
                  <ul className="pt-2 fitness-ul">
                    <li>Built-in marketing suite</li>
                    <li>Community experience</li>
                    <li>Live chat</li>
                    <li>Fitness blog</li>
                    <li>Branded merchandise & gear</li>
                    <li>Mobile Point of Sale system</li>
                  </ul>
                </div>
              </div>
             </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5 pt-4 text-dark">
                <h1 className="busfit-h1 ">Build a more</h1>
                <h1 className="busfit-h1">powerful fitness</h1>
                <h1 className="busfit-h1">business</h1>
                <div className="busfitpara">
                <p className="mb-1 mt-4 text-dark">Keep up with a changing industry, make your clients</p>
                <p className="mb-1 text-dark">feel their best, and boost your productivity—all from</p>
                <p className="text-dark">a single platform.</p>
              </div>
            </div>
            <img className="busfit4 pt-4 ps-lg-5 pe-lg-5 pb-4" src="/images/pageimages/busfitness1.jpg" alt="Fitness template"/>
            </div>
            </div>
          </div>
        </div>

        <div className="business-div">
          <h2 className="text-center pt-2">eCommerce</h2>
         </div>
         <div className="busecom-div1">
          <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6">
              <div className="text-white p-lg-5 mt-5">
                <h1 className="busecom-h1">Learn how to grow</h1>
                <h1 className="busecom-h1">your online business</h1>
                <h4 className="pt-4">Get the knowledge to help you succeed. Whether you're starting from
                scratch or just want to stay on top of what's happening in eCommerce,
                we've got you covered.</h4>
                <div className= " text-white d-flex justify-content-center pt-5 pb-4">
                  <Link to="/signup" style={{borderRadius:"27px"}} className="btn btn-primary btn-xs-width busecom-btn"><h5 className='pt-2'>Create your store</h5></Link>
                </div>
              </div>
      
            </div>
            <div className="col-lg-6 ">
              <div className="busecom-div2">
                <div>
                <img className="busecom-img1" src="/images/pageimages/busecom.jpg" alt="eCommerce template"/>
              </div>
            </div>
            </div>
            </div>
          </div>
         </div>
         <div className="busecom-div1">
          <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6 pb-5 ps-lg-5">
              <img className="busecom-img1" src="/images/pageimages/busecom2.jpeg" alt="eCommerce template"/>
            </div>
            <div className="col-lg-6 p-lg-5 text-white">
              <h1 className="text-center  busecom-h1">Powerful features to enhance your business</h1>
            <div className="ps-lg-5 ms-lg-3 pt-3">
              <ul>
                <li><h4>500+ designer-made templates</h4></li>
                <li><h4>Built-in SEO tools</h4></li>
                <li><h4>Automated sales tax</h4></li>
                <li><h4>Flexible product subscriptions</h4></li>
                <li><h4>70+ payment solutions</h4></li>
                <li><h4>Global eCommerce tools</h4></li>
                <li><h4>Built-in site analytics</h4></li>
              </ul>
            </div>
              
            </div>
            </div>
          </div>
         </div>
         <div className="business-div">
        <h2 className="text-center pt-2">Restaurants</h2>
        </div>
        <div className="busres-div">
       <div className="d-flex justify-content-center">
        <div className="busres-div1 pt-4">
          <h1 className="text-center busecom-h1">The Restaurant Website Builder</h1>
          <h1 className="text-center busecom-h1">That Caters to All Your Needs</h1>
          <h4 className=" pt-4 text-center">Get professional help to create and promote your restaurant website.
             Choose from 100s of experts in our marketplace to help with specific
              tasks such as 
            advertising on social media or boosting your search ranking.</h4>
            <div className="d-flex justify-content-center pt-5 pb-4">
              <Link to="/signup" style={{borderRadius:"27px"}} className="btn btn-success btn-xs-width busblog-btn"><h5 className="pt-2">Get Started</h5></Link>
            </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-6 p-lg-5 pb-4">
        <img className="busres-img" src="/images/pageimages/busres.jpeg" alt="Restaurant template"/>
        </div>
        <div className="col-lg-6 p-lg-5 pb-4">
          <img className="busres-img" src="/images/pageimages/busres1.jpg" alt="Restaurant template"/>
        </div>
        </div>
      </div>
      </div>
      <div className="business-div">
        <h2 className="text-center pt-2">Blog Website</h2>
        </div>
        <div className="busblog-div bg-dark">
         <div className="container-fluid">
          <div className="row">
          <div className="col-lg-6 p-lg-5">
             <img className="busblog-img" src="/images/pageimages/busblog1.jpeg" alt="Blog template"/>
          </div>
          <div className="col-lg-6">
            <div className="text-white p-lg-5">
              <h1 className="busecom-h1">Run your blog</h1>
              <h1 className="busecom-h1">more efficiently</h1>
              <ul className="pt-3">
                <li className="pb-3"><h2>Schedule</h2></li>
                <li className="pb-3"><h2>Collaborate</h2></li>
                <li ><h2>Blog anywhere</h2></li>
              </ul>
            </div>
              
          </div>
          <div className="col-lg-6">
           <div className="text-white ps-lg-5 pe-lg-4">
            <h1 className="busecom-h1 pb-3">Reach the right people</h1>
            <h5>Promote your blog posts on social media and
             translate your content into multiple languages to reach a wider audience.
             Set up automatic emails, send newsletters and create social posts to share
              new content with your readers</h5>
            <div className="d-flex justify-content-center pt-5 pb-4">
              < Link to="/signup"  style={{borderRadius:"27px"}} className="btn btn-primary btn-xs-width busblog-btn"><h5 className='pt-2'>Write a Blog</h5></Link>
            </div>
           </div>
          </div>
          <div className="col-lg-6">
             <div className="p-lg-5">
              <img className="busblog-img" src="/images/pageimages/busblog.jpg" alt="Blog template"/>
             </div>
          </div>
          </div>
         </div>
        </div>





      </div>
      
  
  
 
    )
}

export default BusinessPage