import React, { useEffect, useRef, useState } from 'react'

import './AddTask.css'
import { useDispatch } from 'react-redux'
import { addCard } from '../../store/reducers/kanbanBoardSlice'

interface IAddTaskProps {
    boardIndex: number
}

function AddTask({ boardIndex }: IAddTaskProps) {

  const [value, setValue] = useState('')
  const [inputMode, setInputMode] = useState(false)
  const addCardInputRef: any = useRef(null)

  const dispatch = useDispatch()


  useEffect(() => {
    addCardInputRef?.current?.focus()
  }, [inputMode])

    function submitHandler(e: any) {
        e.preventDefault()
        if(value.trim().length === 0) return
        dispatch(addCard({boardIndex, content: value}))
        setInputMode(false)
        setValue('')
    }

  return (
    <div className='addTask'>
      {
        inputMode ? (
          <form 
            className='addForm'
            onSubmit={submitHandler}
          >
              <input
                ref={addCardInputRef}
                className='addInput'
                type='text'
                placeholder='Please enter Task'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                type='submit'
                className='addBtn'
              >
                +
              </button>
          </form>          
        ) : (
          <p
            className='addText'
            onClick={() => setInputMode(true)}
          >
            <span
              className='addTextPlus'
            >
              +
            </span>
            Добавить карточку
          </p>
        )

      }
    </div>
  )
}

export default AddTask