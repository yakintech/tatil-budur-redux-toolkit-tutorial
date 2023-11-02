import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../store/slices/counterSlice';

function Counter() {

    const state = useSelector(state => state);

    let dispatch = useDispatch();

    const increaseCounter = () => {

        dispatch(increment())

    }

    return (<>
        <h1>{state.counterState.value}</h1>
        <button onClick={() => increaseCounter()}>Increase</button>
    </>
    )
}

export default Counter