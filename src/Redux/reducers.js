import { combineReducers } from "redux";

export default combineReducers({
    CounterReducer: require('./reducer').default
}) 