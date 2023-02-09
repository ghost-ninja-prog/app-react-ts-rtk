import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { ITodo } from "../../types/types"
import { fetchTodos, toggleTodo, addTodo, removeTodo, editTodo } from "../../store/reducers/fetchTodoSlice"

import TodoItem from "../../components/TodoItem"
import TodoInputPlus from "../../components/TodoInputPlus"

import './styles.css'
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation"
import Loader from "../../components/Loader/Loader"


const FetchTodoList = () => {
    
    const {error, loading, todos} = useAppSelector(state => state.asyncTodos)


    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    // function handlerClickBtn () {
    //     dispatch(addTodo(valueInput))
    //     setValueInput('')
    // }

    return (
        <div className="container">
            <HeaderNavigation />
            <div className="centerXY">
                <div className="body__item">
                    <h1 className="titleFetchTodo">Async Todo List</h1>
                    
                    <TodoInputPlus addTodo={addTodo} />


                    { (loading && todos.length === 0) && <Loader /> }

                    <ul className="todoList">
                        {  loading === false && todos.length === 0 ?
                            <li>Not Todos!!!</li>
                            :
                            todos.map((todo: ITodo) => <TodoItem 
                                                            key={todo.id} 
                                                            id={todo.id} 
                                                            completed={todo.completed}
                                                            title={todo.title}
                                                            toggleTodo={toggleTodo}
                                                            removeTodo={removeTodo}
                                                            editTodo={editTodo}
                            />)
                            
                        }
                    </ul>
                    
                    {error && <h3>Server error</h3>}
                </div>
            </div>
        </div>
    )
}
export default FetchTodoList