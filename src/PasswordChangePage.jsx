import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { env } from './Config'

function PasswordChangePage() {

    let navigate=useNavigate()

    let formik=useFormik({
        initialValues:{
            email:"",
            password:"",
            confirm:""
        },
        validate:(values)=>{
            let errors={}

            if(values.email===""){
                errors.email="Please enter email id"
            }
            if(values.password===""){
                errors.password="Please enter password"
            }
            if(values.password.length>0 && values.password.length<5){
                errors.password="Password must be atleast 5 characters long"
            }
            if(values.confirm===""){
                errors.confirm="Please re enter password"
            }
            if(values.confirm.length > 0 && values.password !== values.confirm){
                errors.confirm="Password does not match"
            }

            return errors;

        },
        onSubmit:async(values)=>{
            try {
                delete values.confirm
                let password=await axios.post(`${env.api}/passwordchange`,values)

                if(password.status===200){
                    toast.success(password.data.message,{toastId:"11"})
                    navigate("/")
                }else{
                    toast.error(password.data.message,{toastId:"12"})
                }
            } catch (error) {
                toast.error(error.response.data.message,{toastId:"5"})
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
        <div className="bg-light text-center">
             <h2 className='m-0' style={{color:"green"}}>Password change window</h2>
        </div>
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
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" 
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}/>
                        <span style={{color:"red"}}>{formik.errors.password}</span>
                      </div>
                      <div className="mb-3">
                        <label for="pass" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="pass" 
                        name="confirm"
                        onChange={formik.handleChange}
                        value={formik.values.confirm}/>
                        <span style={{color:"red"}}>{formik.errors.confirm}</span>
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

export default PasswordChangePage