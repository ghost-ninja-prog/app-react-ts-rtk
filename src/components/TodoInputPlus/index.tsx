import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { ITodoInputPlusProps } from '../../types/types'

import './styles.css'

const TodoInputPlus = ({ addTodo }: ITodoInputPlusProps) => {

    const [valueInput, setValueInput] = useState('')

    const dispatch = useAppDispatch()


    const handlerClickButton = () => {
        if(valueInput.trim().length === 0) {
            return
        }
        dispatch(addTodo(valueInput))
        setValueInput('')
    }

    return (
        <div className='todoPlus'>
            <input className='todoPlus__input' 
                type="text" 
                value={valueInput} 
                onChange={(e) => setValueInput(e.target.value)}
                onKeyDown={ (e) => {if(e.key === "Enter") {handlerClickButton()}} }
            />
            <button className='todoPlus__button' onClick={handlerClickButton}></button>
        </div>
    )
}

export default TodoInputPlus