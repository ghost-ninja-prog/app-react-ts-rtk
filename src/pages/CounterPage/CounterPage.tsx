import React, { useCallback } from "react"
import Button from "../../components/Button/Button"
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { decrement, increment } from "../../store/reducers/counterSlice"

import  './styles.css'



const CounterPage: React.FC = () => {

    const counter = useAppSelector(state => state.counter)

    const dispatch = useAppDispatch()

    console.log("render counter")


    const incrementHandler = useCallback(() => {
        dispatch(increment())
    }, [dispatch])

    const decrementHandler = useCallback(() => {
        dispatch(decrement())
    }, [dispatch])

    const asyncDecrementHandler = useCallback(() => {
        setTimeout(() => dispatch(decrement()), 1500)
    }, [dispatch])

    const asyncIncrementHandler = useCallback(() => {
        setTimeout(() => dispatch(increment()), 1500)
    }, [dispatch])

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
                        <Button content="Async -" onClickHandler={asyncDecrementHandler} />
                        <Button content="Async +" onClickHandler={asyncIncrementHandler} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CounterPage
