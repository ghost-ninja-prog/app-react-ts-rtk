import React from "react"
import Button from "../../components/Button/Button"
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { decrement, increment } from "../../store/reducers/counterSlice"

import  './styles.css'



const CounterPage: React.FC = () => {

    const counter = useAppSelector(state => state.counter)

    const dispatch = useAppDispatch()

    const incrementHandler = () => {
        dispatch(increment())
    }

    const decrementHandler = () => {
        dispatch(decrement())
    }

    const asyncDecrementHandler = () => {
        setTimeout(() => dispatch(decrement()), 1500)
    }

    const asyncIncrementHandler = () => {
        setTimeout(() => dispatch(increment()), 1500)
    }

    return (
        <div className="container">
            <HeaderNavigation />
            <div className="centerXY">
                <div className="counter body__item">
                    <h3 className="titleCounter">Counter</h3>
                    <div className="counter__control">
                        <Button content="+" onClickHandler={incrementHandler} />
                        {/* <button onClick={() => dispatch(increment())}>+</button> */}
                        <span className="counter__number">{counter.value}</span>
                        <Button content="-" onClickHandler={decrementHandler} />
                        {/* <button onClick={() => dispatch(decrement())}>-</button> */}
                    </div>
                    <div className="counter__control">
                        <Button content="Asunc -" onClickHandler={asyncDecrementHandler} />
                        <Button content="Asunc +" onClickHandler={asyncIncrementHandler} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CounterPage
