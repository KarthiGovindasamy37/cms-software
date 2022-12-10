import { env } from '../../Config'
import { toast } from 'react-toastify';
import axios from "axios"


export const loginUser=(values)=>{

   return async (dispatch)=>{
        try {
            
            console.log("happen");
            let login= await axios.post(`${env.api}/login`,values)
           console.log(login)
            if(login.status===200){
              console.log(login.data.userDetail);
              window.localStorage.setItem("token",login.data.token)
              let loginDetails=login.data.userDetail
              loginDetails.isLoggedin=true
              window.localStorage.setItem("loginDetails",JSON.stringify(loginDetails))
              dispatch({
                type:"LOGIN",
                payload:loginDetails
                })
            }else{
              toast.error(login.data.message,{toastId:"7"})
            }
        } catch (error) {
          console.log(error);
          //toast.error(error.response.data.message,{toastId:"1"})  
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

