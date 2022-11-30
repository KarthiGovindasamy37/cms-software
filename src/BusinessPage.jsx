import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

function BusinessPage(){
    return(
      <div className='businessmain-div'>
      <div class="business-div ">
       <h2 class="text-center pt-2">Fitness</h2>
      </div>
      <div class="busfit1">
          <div class="container-fluid">
            <div className="row">
            <div class="col-lg-6">
              
                <div class="ps-lg-5 pt-5 busfit-text">
                <h1 class="busfit-h1">Boost your</h1>
                <h1 class="busfit-h1">productivity</h1>
                <h4 class="pt-4">Run your entire fitness business</h4>
                <h4>from a single dashboard.</h4>
                
                <ul class="pt-4">
                  <li><p>Easily coordinate your class schedule and empower staff to manage theirs</p></li>
                  <li><p>Streamline your workflow with an integrated CRM solution</p></li>
                  <li><p>Communicate with site visitors via live chat</p></li>
                  <li><p>Track business goals with detailed reports</p></li>
                </ul>
                
                <div class="buslets-div d-flex justify-content-end">
                 <Link to="/signup" className='buslets-btn'> <h4 class="buslets-text ">Let's Build <FontAwesomeIcon icon={faChevronRight}/><FontAwesomeIcon icon={faChevronRight}/></h4></Link>
                </div>
              </div>
              
      
            </div>
            <div class="col-lg-6 busfit2">
              <div class="d-flex justify-content-center">
                <div>
                  <img class="busfit3" src="/images/pageimages/busfitness2.jpg" alt="Fitness template"/>
      
                </div>
                
              </div>
      
            </div>
          </div>
          </div>
        </div>

        <div class="business-div2">
          <div class="container-fluid">
            <div className="row">
            <div class="col-lg-6">
              <img class="busfit4 pt-5 ps-lg-5 pe-lg-5" src="/images/pageimages/busfitness.jpg" alt="Fitness template"/>
             <div class="ps-lg-5 pt-5">
              <div class="d-flex">
                <div class="col-6">
                  <h2 class="pb-2">Build your brand</h2>
                  <hr class="fitness-hr"/>
                  <ul class="pt-2 fitness-ul">
                    <li>Lead-driving website</li>
                    <li>Branded mobile app</li>
                    <li>Live streams & VOD </li>
                    <li>Online challenge programs</li>
                    <li>Memberships and packages</li>
                    <li>Online scheduling & payments</li>
                  </ul>
                </div>
                <div class="col-6">
                  <h2 class="pb-2">Grow your business</h2>
                  <hr class="fitness-hr"/>
                  <ul class="pt-2 fitness-ul">
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
            <div class="col-lg-6">
              <div class="ps-lg-5 pt-4 text-dark">
                <h1 class="busfit-h1 ">Build a more</h1>
                <h1 class="busfit-h1">powerful fitness</h1>
                <h1 class="busfit-h1">business</h1>
                <div class="busfitpara">
                <p class="mb-1 mt-4 text-dark">Keep up with a changing industry, make your clients</p>
                <p class="mb-1 text-dark">feel their best, and boost your productivity—all from</p>
                <p class="text-dark">a single platform.</p>
              </div>
            </div>
            <img class="busfit4 pt-4 ps-lg-5 pe-lg-5 pb-4" src="/images/pageimages/busfitness1.jpg" alt="Fitness template"/>
            </div>
            </div>
          </div>
        </div>

        <div class="business-div">
          <h2 class="text-center pt-2">eCommerce</h2>
         </div>
         <div class="busecom-div1">
          <div class="container-fluid">
            <div className="row">
            <div class="col-lg-6">
              <div class="text-white p-lg-5 mt-5">
                <h1 class="busecom-h1">Learn how to grow</h1>
                <h1 class="busecom-h1">your online business</h1>
                <h4 class="pt-4">Get the knowledge to help you succeed. Whether you're starting from
                scratch or just want to stay on top of what's happening in eCommerce,
                we've got you covered.</h4>
                <div class= " text-white d-flex justify-content-center pt-5 pb-4">
                  <Link to="/signup" style={{borderRadius:"27px"}} class="btn btn-primary btn-xs-width busecom-btn"><h5 className='pt-2'>Create your store</h5></Link>
                </div>
              </div>
      
            </div>
            <div class="col-lg-6 ">
              <div class="busecom-div2">
                <div>
                <img class="busecom-img1" src="/images/pageimages/busecom.jpg" alt="eCommerce template"/>
              </div>
            </div>
            </div>
            </div>
          </div>
         </div>
         <div class="busecom-div1">
          <div class="container-fluid">
            <div className="row">
            <div class="col-lg-6 pb-5 ps-lg-5">
              <img class="busecom-img1" src="/images/pageimages/busecom2.jpeg" alt="eCommerce template"/>
            </div>
            <div class="col-lg-6 p-lg-5 text-white">
              <h1 class="text-center  busecom-h1">Powerful features to enhance your business</h1>
            <div class="ps-lg-5 ms-lg-3 pt-3">
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
         <div class="business-div">
        <h2 class="text-center pt-2">Restaurants</h2>
        </div>
        <div class="busres-div">
       <div class="d-flex justify-content-center">
        <div class="busres-div1 pt-4">
          <h1 class="text-center busecom-h1">The Restaurant Website Builder</h1>
          <h1 class="text-center busecom-h1">That Caters to All Your Needs</h1>
          <h4 class=" pt-4 text-center">Get professional help to create and promote your restaurant website.
             Choose from 100s of experts in our marketplace to help with specific
              tasks such as 
            advertising on social media or boosting your search ranking.</h4>
            <div class="d-flex justify-content-center pt-5 pb-4">
              <Link to="/signup" style={{borderRadius:"27px"}} class="btn btn-success btn-xs-width busblog-btn"><h5 class="pt-2">Get Started</h5></Link>
            </div>
        </div>
      </div>
      <div class="container-fluid">
        <div className="row">
        <div class="col-lg-6 p-lg-5 pb-4">
        <img class="busres-img" src="/images/pageimages/busres.jpeg" alt="Restaurant template"/>
        </div>
        <div class="col-lg-6 p-lg-5 pb-4">
          <img class="busres-img" src="/images/pageimages/busres1.jpg" alt="Restaurant template"/>
        </div>
        </div>
      </div>
      </div>
      <div class="business-div">
        <h2 class="text-center pt-2">Blog Website</h2>
        </div>
        <div class="busblog-div bg-dark">
         <div class="container-fluid">
          <div className="row">
          <div class="col-lg-6 p-lg-5">
             <img class="busblog-img" src="/images/pageimages/busblog1.jpeg" alt="Blog template"/>
          </div>
          <div class="col-lg-6">
            <div class="text-white p-lg-5">
              <h1 class="busecom-h1">Run your blog</h1>
              <h1 class="busecom-h1">more efficiently</h1>
              <ul class="pt-3">
                <li class="pb-3"><h2>Schedule</h2></li>
                <li class="pb-3"><h2>Collaborate</h2></li>
                <li ><h2>Blog anywhere</h2></li>
              </ul>
            </div>
              
          </div>
          <div class="col-lg-6">
           <div class="text-white ps-lg-5 pe-lg-4">
            <h1 class="busecom-h1 pb-3">Reach the right people</h1>
            <h5>Promote your blog posts on social media and
             translate your content into multiple languages to reach a wider audience.
             Set up automatic emails, send newsletters and create social posts to share
              new content with your readers</h5>
            <div class="d-flex justify-content-center pt-5 pb-4">
              < Link to="/signup"  style={{borderRadius:"27px"}} class="btn btn-primary btn-xs-width busblog-btn"><h5 className='pt-2'>Write a Blog</h5></Link>
            </div>
           </div>
          </div>
          <div class="col-lg-6">
             <div class="p-lg-5">
              <img class="busblog-img" src="/images/pageimages/busblog.jpg" alt="Blog template"/>
             </div>
          </div>
          </div>
         </div>
        </div>





      </div>
      
  
  
 
    )
}

export default BusinessPage