import React, { useState, useEffect } from 'react'

import './style.css'
import { ITodoProps } from '../../types/types'
import { useAppDispatch } from '../../hooks/hooks'



const TodoItem = ({ id, title, completed, toggleTodo, removeTodo, editTodo }: ITodoProps) => {

    const [checked, setChecked] = useState(completed)
    const [value, setValue] = useState(title)
    const [isEditMode, setIsEditMode] = useState(false)

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
            <label className='inputTaskLabel'>
                <input className='todoItem__checkbox' type="checkbox" checked={checked} onChange={handlerClickCheckbox} />
                {
                    isEditMode ? (
                        <input
                            value={value}
                            // ref={editTitleInputRef}
                            onChange={(evt) => {
                                setValue(evt.target.value)
                            }}
                            className='inputTaskTitleEdit'
                            onKeyDown={(evt) => {
                                if(evt.key === 'Enter') {
                                    setIsEditMode(false)
                                    dispatch(editTodo({id, title: value}))
                                }
                            }}
                        />
                    ) : (
                        <h3 className='todoTitle'>{title}</h3>
                    )
                }
            </label>
            <div>
                {isEditMode ? (
                    <button className='todo__btn-save'
                             onClick={() => {
                                setIsEditMode(false)
                                dispatch(editTodo({id, title: value})) 
                            }}
                    />
                ) : (
                    <button className='todo__btn-edit' onClick={() => setIsEditMode(true)}></button>
                )}
                <button className='todo__btn-remove' onClick={() => dispatch(removeTodo(id))}></button>
            </div>
        </li>
    )
}
export default TodoItem