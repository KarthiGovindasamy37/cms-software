import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { env } from "./config";



export let leadContext=createContext()

 export let LeadProvider=({children})=>{

    let[lead,setlead]=useState([])
    let[loading,setloading]=useState(false)
    let[mdata,setmdata]=useState()
    let navigate=useNavigate()

    
    useEffect(()=>{
        loadlead()
        setmdata(0)
      },[mdata])

    let loadlead=async()=>{
      try {
        setloading(true)
        let lead=await axios.get(`${env.api}/lead`,{headers:{"authorization":window.localStorage.getItem("app-token"),
        "role":window.localStorage.getItem("app-role")}})
        if(lead.status=200){
        setlead(lead.data)
        setloading(false)
        }else{
            alert(lead.data.message)
        }
        
      } catch (error) {
        alert(error.response.data.message)
        if(error.response.status==440) {
          navigate("/")
         }
      }
    }




    return(
    <leadContext.Provider value={{lead,loading,mdata,setmdata,setlead}}>
     {children}
    </leadContext.Provider>
    )
}


import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { env } from "./config";



export let serviceContext=createContext()

 export let ServiceProvider=({children})=>{

    let[service,setservice]=useState([])
    let[loading,setloading]=useState(false)
    let[mdata,setmdata]=useState()
    let navigate=useNavigate()

    
    useEffect(()=>{
        loadservice()
        setmdata(0)
      },[mdata])

        
    let loadservice=async()=>{
      try {
        setloading(true)
        let service=await axios.get(`${env.api}/service`,{headers:{"authorization":window.localStorage.getItem("app-token"),
        "role":window.localStorage.getItem("app-role")}})
        if(service.status==200){
          setservice(service.data)
          setloading(false)
          
        }else{
          alert(service.data.message)
        }
        
      } catch (error) {
        alert(error.response.data.message)
        if(error.response.status==440) {
          navigate("/")
         }
      }
    }



    return(
    <serviceContext.Provider value={{service,loading,mdata,setmdata,setservice}}>
     {children}
    </serviceContext.Provider>
    )
}


