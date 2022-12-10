const initialState = {
webOpen:false,
webContents:false,
blogOpen:false,

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
                    
        
            default:
                return state;
    }
}
export default PortalReducer