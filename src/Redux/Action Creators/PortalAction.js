import axios from "axios"
import { toast } from "react-toastify"
import { env } from "../../Config"

export const webAction=()=>(dispatch)=>dispatch({type:"WEBOPEN"})
export const webContentsAct=()=>(dispatch)=>dispatch({type:"WEBCONTENTS"})
export const blogAction=()=>(dispatch)=>dispatch({type:"BLOGOPEN"})
export const setAuthError = () => (dispatch) => dispatch({type:"SETAUTHERROR"})

export const authorize = () =>{
    return async(dispatch) =>{
        try {
            let verify = await axios.post(`${env.api}/authorize`,{},{headers:{authorization:window.localStorage.getItem("token")}})
            
        } catch (error) {
            toast.error(error.response.data.message,{toastId:Math.random()})
            if(error.response.status === 401 || error.response.status === 440){

                let login = {
                    name:"",
                    email:"",
                    isLoggedin:false
                }
                window.localStorage.setItem("loginDetails",JSON.stringify(login))
                dispatch({
                    type:"AUTHERROR"
                })
            }
        }
    }
}
