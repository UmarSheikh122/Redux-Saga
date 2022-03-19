import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from './Redux/action';

const Counter = () => {
    const dispatch = useDispatch();
    const Counter = useSelector(state => state.CounterReducer.counter)
    console.log('Counter: ', Counter);
  return (
    <>

    <button onClick={()=> {
        dispatch(incrementCounter())
    }}>Counter +</button>

    <button onClick={()=> {
        dispatch(decrementCounter())
    }}>Counter -</button>
    {Counter}
    </>
  )
}

export default Counter