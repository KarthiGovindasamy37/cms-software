
 const initialState=window.localStorage.getItem("loginDetails") !== null ?
                  {user:JSON.parse(window.localStorage.getItem("loginDetails")),
                   logoutLink:false}  :
                   {user:{
                    name:"",email:"",isLoggedin:false
                   },
                   logoutLink:false
                     }
                

const LoginReducer = (state=initialState,{type,payload})=>{
    console.log(payload)
    console.log(initialState)
    switch(type){
        case "LOGIN" :
           return {...state,user:payload}  
           case "LOGOUTLINK":
                        return{
                            ...state,
                            logoutLink:!state.logoutLink
                        }
           case "LOGOUT":
            return{...state,user:payload,logoutLink:false}
           
         default :
        return state
    }
    
}

export default LoginReducer