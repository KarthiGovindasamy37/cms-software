import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { env } from './Config'

function SignupPage() {

  let navigate=useNavigate()

  let formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      confirmpass:"",
      checked:false
    },
    validate:(values)=>{
      let errors={}
       
      if(values.name===""){
        errors.name="Please enter user name"
      }
      if(values.email===""){
        errors.email="Please enter email id"
      }
      if(values.password===""){
        errors.password="Please enter password"
      }
      if(values.password.length>0 && values.password.length<5){
        errors.password="Password should be atleast 5 characters long"
      }
      if(values.confirmpass===""){
        errors.confirmpass="Please re enter password"
      }
      if(values.confirmpass.length>0 && values.password !== values.confirmpass){
        errors.confirmpass="Password does not match"
      }
      if(values.checked===false){
        errors.checked="Please click the check box"
      }

      return errors;
    },
    onSubmit:async(values)=>{
      try {
        delete values.checked
        delete values.confirmpass
        let user=await axios.post(`${env.api}/register`,values)
        if(user.status===200){
          toast.success(user.data.message,{toastId:"6"})
          navigate("/")
        }
      } catch (error) {
        toast.error(error.response.data.message,{toastId:"2"})
      }
    }
  })
  
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
      <Link to="/"  className="navbar-brand fw-bold sitename" >MySite.com</Link>
      </div>
</nav>
<div className="d-flex justify-content-center  signuppage bg-light ">
  <div>
    <h5 className='text-center'>Already have an account? <Link to="/" className='tnc'>Log in</Link></h5>
    <div className="signup shadow-lg p-3 mb-5 bg-body rounded mt-3">
        <form onSubmit={formik.handleSubmit}>
           <div className="mb-3 mt-2">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name} />
                <span style={{color:"red"}}>{formik.errors.name}</span>
              </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email"
                name="email"
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
              <div className="mb-3">
                <label for="confirmpass" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmpass"
                name="confirmpass"
                onChange={formik.handleChange}
                value={formik.values.confirmpass} />
                <span style={{color:"red"}}>{formik.errors.confirmpass}</span>
              </div>
              <div className="form-check mt-5">
                <input className="form-check-input" type="checkbox"  id="flexCheckDefault"
                name="checked"
                onChange={formik.handleChange}
                value="checked"/>
                <label className="form-check-label" for="flexCheckDefault">
                  By clicking you agree to our <Link to="/terms" className="tnc">terms of use</Link> and acknowledge you've read our <Link to="/privacy" className="tnc">privacy policy</Link>.
                </label>
              </div>
              <div className="d-flex justify-content-center mt- mb-1">
                <button disabled={!formik.isValid} className="btn btn-primary signupbtn" type="submit">Sign Up</button>
              </div>

        </form>
    </div>
</div>
</div>
</div>
  )
}

export default SignupPage