import {applyMiddleware,compose} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import reducer from "./Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
    {reducer: reducer},
    composeEnhancers(applyMiddleware(thunk))
)

export default store
 