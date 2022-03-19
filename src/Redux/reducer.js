import {DECREMENT_COUNTER, INCREMENT_COUNTER } from "./action"

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case `INCREMENT_COUNTER_SAGA`: 
        return {
            ...state, counter: state.counter + action.value
        }
        case `DECREMENT_COUNTER_SAGA`: 
        return {
            ...state, counter: state.counter - action.value
        }
        default: 
        return state;
    }
}
export default reducer