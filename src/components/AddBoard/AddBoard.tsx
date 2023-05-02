import React, { useState } from 'react'

import './AddBoard.css'

import { addColumn } from '../../store/reducers/kanbanBoardSlice'
import { useAppDispatch } from '../../hooks/hooks'


function AddBoard() {

	const dispatch = useAppDispatch()

	const [inputMode, setInputMode] = useState(false)
	const [inputValue, setInputValue] = useState('')

	const handlerSubmit = (e: any) => {
		e.preventDefault()
		dispatch(addColumn(inputValue))
		setInputValue('')
		setInputMode(false)
	}

	return (
		<div className='addColumnContainer'>
			{
				inputMode ? (
					<form onSubmit={handlerSubmit} >
						<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
						<button type='submit'>add</button>
					</form>
				) : (
					<div
						className='addColumnTitle'
						onClick={() => setInputMode(true)}
					>
						<span className='addColumnIcon'></span>
						<span>Добавить колонку</span>
					</div>
				)
			}
		</div>
	)
}

export default AddBoard