import React from "react"
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { decrement, increment } from "../../store/reducers/counterSlice"

import  './styles.css'



const CounterPage: React.FC = () => {

    const counter = useAppSelector(state => state.counter)

    const dispatch = useAppDispatch()

    return (
        <div className="container">
            <HeaderNavigation />
            <div className="centerXY">
                <div className="counter">
                    <h3 className="title">Counter</h3>
                    <div className="counter__control">
                        <button onClick={() => dispatch(increment())}>+</button>
                        <span>{counter.value}</span>
                        <button onClick={() => dispatch(decrement())}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CounterPage
