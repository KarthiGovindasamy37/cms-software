import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import {env} from './Config'

function ForgotPasswordPage() {

  let formik=useFormik({
    initialValues:{
      email:""
    },
    validate:(values)=>{
      let errors={}

      if(values.email===""){
        errors.email="Please enter email address"
      }

      return errors;
    },
    onSubmit:async(values)=>{
      try {
        let user=await axios.post(`${env.api}/forgot`,values)
        if(user.status===200){
          toast.success(user.data.message,{toastId:"8"})
        }else{
          toast.error(user.data.message,{toastId:"9"})
        }
      } catch (error) {
        toast.error(error.response.data.message,{toastId:"3"})
      }
    }
  })
 
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
              <Link to="/"  className="navbar-brand fw-bold sitename" >MySite.com</Link>
              </div>
        </nav>
        <div className="d-flex justify-content-center bg-light pt-5 ps-4" >
          <div>
          <div className="mb-3">
            <span className="step">Step 1 : </span>Enter your email address and submit.
          </div>
          <div className="mb-3">
            <span  className="step">Step 2 : </span>A temporary password will be sent to the given email id.
          </div>
          <div>
            <span  className="step">Step 3 : </span>After receiving password click the temporary password link.
          </div>
        </div>
 
        </div>
        <div className="forgotpage">
        <div className="d-flex justify-content-center  forgotpage bg-light ">
          <div className="col-11 col-sm-10 col-md-6 col-lg-4">
            <div className="forgot shadow-lg p-3 mb-5 bg-body rounded mt-5">
              
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label for="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                        <span style={{color:"red"}}>{formik.errors.email}</span>
                      </div>
                      <div className="d-flex justify-content-center mt-5 mb-3">
                        <button disabled={!formik.isValid} className="btn btn-primary signupbtn" type="submit">Submit</button>
                      </div>
                      <div className="d-flex justify-content-end ">
                        <Link  to="/templogin" className='passlink'>Temporary Password</Link>
                      </div>
                      
                      </form>
                     </div>
                     </div>
                </div>
                </div>
                
    </div>
  )
}

export default ForgotPasswordPage