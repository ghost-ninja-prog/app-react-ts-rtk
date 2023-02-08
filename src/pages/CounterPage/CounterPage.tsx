import React from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { decrement, increment } from "../../store/reducers/counterSlice"

import  './styles.css'



const CounterPage: React.FC = () => {

    const counter = useAppSelector(state => state.counter)

    const dispatch = useAppDispatch()

    return (
        <div className="counter">
            <h3 className="title">Counter</h3>
            <div className="counter__control">
                <button onClick={() => dispatch(increment())}>+</button>
                <span>{counter.value}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    )
}
export default CounterPage
