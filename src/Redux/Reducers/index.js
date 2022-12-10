import {combineReducers} from "redux"
import LoginReducer from "./LoginReducer";
import PortalReducer from "./PortalReducer";

const reducer = combineReducers({
    user:LoginReducer,
    portal:PortalReducer
})

export default reducer