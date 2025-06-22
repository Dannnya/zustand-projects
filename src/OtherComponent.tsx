import React from 'react'
import { useCounter } from './store'

export const OtherComponent = () => {

    const { increment, decrement } = useCounter();

    return (
        <>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
};
