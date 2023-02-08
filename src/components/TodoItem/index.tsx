import React, { useState, useEffect } from 'react'

import './style.css'
import { ITodoProps } from '../../types/types'
import { useAppDispatch } from '../../hooks/hooks'



const TodoItem = ({ id, title, completed, toggleTodo, loading }: ITodoProps) => {

    const [checked, setChecked] = useState(completed)

    useEffect(() => {
        setChecked(completed)
    }, [completed])


    const dispatch = useAppDispatch()

    const handlerClickCheckbox = () => {
        setChecked(completed)
        dispatch(toggleTodo(id))
    }

    return (
        <li className='todoItem'>
            <input type="checkbox" checked={checked} onChange={handlerClickCheckbox} />
            <span className='todoTitle' onClick={handlerClickCheckbox}>{title}</span>
            <div>
                <button className='todo__btn-edit'></button>
                <button className='todo__btn-remove'></button>
            </div>
        </li>
    )
}
export default TodoItem