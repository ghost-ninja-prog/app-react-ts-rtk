import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { ITodoInputPlusProps } from '../../types/types'

import './style.css'

const TodoInputPlus = ({ addTodo }: ITodoInputPlusProps) => {

    const [valueInput, setValueInput] = useState('')

    const dispatch = useAppDispatch()

    const handlerClickButton = () => {
        dispatch(addTodo(valueInput))
        setValueInput('')
    }

    return (
        <div>
            <input type="text" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
            <button onClick={handlerClickButton}>Add Todo</button>
        </div>
    )
}

export default TodoInputPlus