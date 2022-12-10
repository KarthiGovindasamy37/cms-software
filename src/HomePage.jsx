import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CarouselItem from './Component/CarouselItem'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from "./Redux/Action Creators/LoginAction"
import { useEffect } from 'react'

function HomePage() {

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    const {loginUser} = bindActionCreators(actionCreator,dispatch)

    let navigate=useNavigate()

    useEffect(()=>{
       if(user.isLoggedin === true ) navigate("/portal")
    },[user])

    let formik=useFormik({
        initialValues:{
            email:"",
            password:""  
        },

       validate:(values)=>{
            let errors={}

            if(values.email===""){
                errors.email="Please enter email id"
            } 
            if(values.password===""){
                errors.password="Please enter password"
            }
            return errors;
        },
        onSubmit:(values)=>{
          
           loginUser(values) 

        }
    })

    let carouselItem=[
      {
        title:"Fitness",
        image:"/images/carousel/carfit.jpg",
        alternative:"Fitness template"
      },
      {
        title:"Travel",
        image:"/images/carousel/cartour.jpg",
        alternative:"Travel template"
      },
      {
        title:"Restaurant",
        image:"/images/carousel/carfoodres.jpg",
        alternative:"Restaurant template"
      },
      {
        title:"eCommerce",
        image:"/images/carousel/carecom.jpg",
        alternative:"eCommerce template"
      },
      {
        title:"Grocery",
        image:"/images/carousel/carorganicveg.jpg",
        alternative:"Grocery template"
      },
      {
        title:"Education",
        image:"/images/carousel/caredu.jpg",
        alternative:"Education template"
      },
      {
        title:"IT Services",
        image:"/images/carousel/caritsol.jpg",
        alternative:"IT Services template"
      },
      {
        title:"Portfolio",
        image:"/images/carousel/carport.jpg",
        alternative:"Portfolio template"
      }
    ]
   
  return (
    <div className='pt-5'>
      <div className="container-fluid">
        <div className="row home1">
           <div className=" col-md-9 bg-light d-flex justify-content-center align-items-center">
                <div className="text-center">
                <h1 className="head">Craft a website</h1>
                <h1 className="head">your way</h1>
                <div className="text-center mt-5">
                <p className="para">Create any kind of website. No code,no manuals, no limits.</p>
                <p className="para">Promote your business and reach the right audience.</p>
                
            </div>
            <div className="d-flex justify-content-center mt-5">
              <Link to="signup" className="btn-success buildbtn btn-xs-width"><h6 className='pt-1'>Build My Site</h6></Link>
           </div>
            </div>
              
            </div>
            <div className=" col-md-3 bg-light ">
             <div className="col-sm-6 col-md-12 mt-5 ">
                <h6 class>Don't have an account,<Link to="/signup" className='signuplink'>sign up</Link> to get started</h6>   
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email"
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email} />
                    <span style={{color:"red"}}>{formik.errors.email}</span>
                  </div>
                  <div className="mb-3">
                    <label for="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password} />
                    <span style={{color:"red"}}>{formik.errors.password}</span>
                  </div>
                  <div className="d-flex justify-content-end ">
                    <Link to="/forgot" className="forgotlink">forgot password?</Link>
                    
                  </div>
                  <div className='pb-4'>
                    <button disabled={!formik.isValid} className="btn btn-primary login-btn mt-3 " type="submit">Login</button>
                  </div>
            </form>
        </div>
            </div>
            </div>
        </div>

        <div className="bg-dark ">
    <div className=" d-flex justify-content-center pt-5">
         <h1 className="text-white carousel-h1">Website templates that set</h1>
    </div>
    <div className=" d-flex justify-content-center mb-5">
      <h1 className="text-white carousel-h1">your business on trend</h1>
 </div>
 <div className=" d-flex justify-content-center">
  <div id="carouselExampleFade" className="carousel slide" data-bs-pause="false" data-bs-interval="3000" data-bs-ride="carousel">
    <div className="carousel-inner">
      {
        carouselItem.map((item,index)=>{
          return <CarouselItem item={item} index={index}/>
        })
      }
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
 </div>

  </div>
  <div className='container-fluid fashiondiv'>
    <div className="row">
     <div className="col-lg-7 mt-5">
        <img className='fashiondiv1' src="/images/pageimages/fashion1.jpeg" alt="" />
     </div>
     <div className="col-lg-5 fashiondiv2 pt-5 ">
         <h1 className='fashiontext text-center'>Take your business where it needs to go</h1>
         <div className="d-flex justify-content-center">
         <ul className='fashionul mt-5'>
          <li>Sell online  and manage your business with powerful eCommerce solutions.</li>
          <li>Create a free blog, grow a loyal audience and monetize your content.</li>
          <li>Increase your visibility and attract new clients with your work.</li>
          <li>Get scalable, free web hosting when you create your own website.</li>
          <li>Establish a strong brand identity with a customizable logo.</li>
         </ul>
         </div>
     </div>
  </div>
  </div>

  <div className="container-fluid multiple">
    <div className="row g-0">
      <div className="col-lg-4 d-flex justify-content-center align-items-center multiplediv1">
        <div className="multiplediv2">
          <h1>Get inspired,</h1>
          <h1>gain new skills</h1>
          <h1>and see what's</h1>
          <h1>trending</h1>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/signup" style={{borderRadius:"30px",padding:"15px"}} className="btn btn-primary multiplebtn btn-xs-width">Get Started</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
       
        <div className="row">
          <div className="col-md-6 col2 ">
             <div className="d-flex justify-content-center align-items-center col1 ps-md-2 pe-md-2">
              <div className='ps-md-2'>
            <img className='multiple-img' src="/images/pageimages/multiple1.jpg" alt="Website templates" />
             </div>
             </div>
            
            <h5 className="text-center">How to design a website</h5>
          </div>
          <div className="col-md-6 col2 ">
            <div className="d-flex justify-content-center align-items-center col1">
           <div  className='pe-md-2'>
             <img className='multiple-img' src="/images/pageimages/multiple2.jpeg" alt="Website templates" />
            </div>
           </div>
           <h5 className="text-center">Custom templates</h5>
         </div>
         <div className="col-md-6 col2 ">
          <div className="d-flex justify-content-center align-items-center col1">
         <div  className='ps-md-2'>
         <img className='multiple-img' src="/images/pageimages/multiple3.jpeg" alt="Website templates" />  
          </div>
         </div>
         <h5 className="text-center">Free LOGO maker</h5>
       </div>
       <div className="col-md-6 col2 ">
        <div className="d-flex justify-content-center align-items-center col1">
       <div className='pe-md-2' >
       <img className='multiple-img' src="/images/pageimages/multiple4.jpeg" alt="Website templates" />
        </div>
       </div>
       <h5 className="text-center">Get support 24/7</h5>
     </div>
          
        </div>
        </div>
        </div>
      </div>
      </div>
      
      
    

   
  )
}

export default HomePage