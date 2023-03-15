const initialState = {
webOpen:false,
webContents:false,
blogOpen:false,
authError:false

}

const PortalReducer=(state=initialState,action)=>{
   switch (action.type){
        case "WEBOPEN":
            return{
                ...state,
                webOpen:!state.webOpen,
                webContents:false
            }
            case "WEBCONTENTS":
                return{
                    ...state,
                    webContents:!state.webContents
                }
                case "BLOGOPEN":
                    return{
                        ...state,
                        blogOpen:!state.blogOpen
                    }
                    case "AUTHERROR":
                        return{
                            ...state,
                            authError:true
                        }
                        case "SETAUTHERROR":
                            return{
                                ...state,
                                authError:false
                            }
                    
        
            default:
                return state;
    }
}
export default PortalReducer