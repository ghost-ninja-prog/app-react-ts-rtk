import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import './Card.css'

import { useAppDispatch } from '../../hooks/hooks'
import { removeCard } from '../../store/reducers/kanbanBoardSlice'

interface ICardProps {
    item: {id: string, content: string},
    index: number,
    boardIndex: number
}

function Card({ item, index, boardIndex }: ICardProps) {

  const dispatch = useAppDispatch()

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          // isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
          className='card'
          style={{
            boxShadow: snapshot.isDragging ? '0px 6px 4px 1px rgba(0, 0, 0, .3)' : '0px 3px 4px 1px rgba(0, 0, 0, .3)',
            ...provided.draggableProps.style,
          }}
          
          
        >
          <span>
            {item.content}
          </span>
          <button 
            // onClick={() => removeTask(item.id)}
            onClick={() => dispatch(removeCard({boardIndex, id: item.id}))}
            className='btnRemove'
          />
        </div>
      )}
    </Draggable>
  )
}

export default Card