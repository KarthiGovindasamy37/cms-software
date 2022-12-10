import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { env } from './Config'

function TemporaryPasswordPage() {

    let navigate=useNavigate()

    let formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validate:(values)=>{
            let errors={}

            if(values.email===""){
                errors.email="Please enter email address"
            }
            if(values.password===""){
                errors.password="Please enter temporary password"
            }

            return errors;
        },
        onSubmit:async(values)=>{
            try {
                values.password=values.password.trim()
                let user=await axios.post(`${env.api}/temppassword`,values)
                if(user.status===200){
                    toast.info(user.data.message,{toastId:"10"})
                    navigate("/passwordchange")

                }else{
                    toast.error(user.data.message,{toastId:"9"})
                }

            } catch (error) {
                toast.error(error.response.data.message,{toastId:"4"})
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
          <div className="d-flex justify-content-center  temppage bg-light ">
              <div className="temppass shadow-lg p-3 mb-5 bg-body rounded mt-5">
                  <form onSubmit={formik.handleSubmit}>
                      <div className="mb-3 mt-3">
                          <label for="email" className="form-label">Email Address</label>
                          <input type="email" className="form-control" id="email" 
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}/>
                          <span style={{color:"red"}}>{formik.errors.email}</span>
                        </div>
                        <div className="mb-3">
                          <label for="pass" className="form-label">Temporary Password</label>
                          <input type="password" className="form-control" id="pass"
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password} />
                          <span style={{color:"red"}}>{formik.errors.password}</span>
                        </div>
                        
                        <div className="d-flex justify-content-center mt-5 mb-3">
                          <button disabled={!formik.isValid} className="btn btn-primary signupbtn" type="submit">Submit</button>
                        </div>

                  </form>
              </div>
          </div>
    </div>
  )
}

export default TemporaryPasswordPage