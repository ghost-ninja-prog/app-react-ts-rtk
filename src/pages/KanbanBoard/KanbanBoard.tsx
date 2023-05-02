import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { onDragEnd } from '../../store/reducers/kanbanBoardSlice'
import Board from '../../components/Board/Board'
import AddBoard from '../../components/AddBoard/AddBoard'

import './KanbanBoard.css'

function KanbanBoard() {

  const columns = useAppSelector(state => state.kanbanBoard)
  const dispatch = useAppDispatch()


  return (
    <>
    {/* // <div className='container'> */}
      <HeaderNavigation />
      {/* <div className='centerXY'> */}
        <div className='app-container'>
          <DragDropContext onDragEnd={result => dispatch(onDragEnd(result))} >
            {columns.map((column, index) => {
              return (
                <Board
                  key={index}
                  boardIndex={index}
                  column={column}
                />
              )
            })}
            <AddBoard />
          </DragDropContext>
        </div>
      {/* </div> */}
    {/* // </div> */}
    </>
  )
}

export default KanbanBoard