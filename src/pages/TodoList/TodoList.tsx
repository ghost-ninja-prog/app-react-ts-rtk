import React, { useState } from "react"
import { addTodo, removeTodo, toggleTodo } from "../../store/reducers/todoSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import TodoItem from "../../components/TodoItem"

import './style.css'
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation"
import TodoInputPlus from "../../components/TodoInputPlus"


const TodoList: React.FC = () => {
    
    const todos = useAppSelector(state => state.todo)

    return (
        <div className="container">
            <HeaderNavigation />
            <div className="centerXY">
                <div className="body__item">
                    <h1 className="titleSyncTodoList">Todo List</h1>
                    
                    <TodoInputPlus addTodo={addTodo}/>

                    <ul>
                        {
                            todos.length > 0 ?
                            todos.map(todo => <TodoItem 
                                                    key={todo.id} 
                                                    id={todo.id}
                                                    title={todo.title}
                                                    completed={todo.completed}
                                                    toggleTodo={toggleTodo}
                                                    removeTodo={removeTodo}
                                                />
                                    )
                            :
                            <li>Not Todos!!!</li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TodoList