import { env } from '../../Config'
import { toast } from 'react-toastify';
import axios from "axios"


export const loginUser=(values)=>{

   return async (dispatch)=>{
        try {
            
            let login= await axios.post(`${env.api}/login`,values)
           
            if(login.status===200){
              window.localStorage.setItem("token",login.data.token)
              let loginDetails=login.data.userDetail
              loginDetails.isLoggedin=true
              window.localStorage.setItem("loginDetails",JSON.stringify(loginDetails))
              dispatch({
                type:"LOGIN",
                payload:loginDetails
                })
            }
        } catch (error) {
          
          toast.error(error.response?.data?.message,{toastId:"1"})  
        }
    }


    
}

export const logoutAct=()=>(dispatch)=>dispatch({type:"LOGOUTLINK"})

export const logoutUser=()=>{
  return(dispatch)=>{
    window.localStorage.removeItem("loginDetails")
    let logoutDetails={
      name:"",
      email:"",
      isLoggedin:false
    }
    dispatch({type:"LOGOUT",payload:logoutDetails})
  }
}

