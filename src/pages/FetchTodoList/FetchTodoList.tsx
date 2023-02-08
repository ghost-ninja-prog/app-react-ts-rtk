import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { ITodo } from "../../types/types"
import { fetchTodos, toggleTodo, addTodo } from "../../store/reducers/fetchTodoSlice"

import TodoItem from "../../components/TodoItem"
import TodoInputPlus from "../../components/TodoInputPlus"

import './styles.css'


const FetchTodoList: React.FC = () => {
    
    const asyncTodos = useAppSelector(state => state.asyncTodos.todos)

    const loading = useAppSelector(state => state.asyncTodos.loading)

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
            <div className="body__item">
                <h1 className="titleFetchTodo">Fetch Todo List</h1>
                
                <TodoInputPlus addTodo={addTodo} />

                <ul className="todoList">
                    { asyncTodos.length > 0 ?                 
                        asyncTodos.map((todo: ITodo) => <TodoItem 
                                                            key={todo.id} 
                                                            id={todo.id} 
                                                            completed={todo.completed}
                                                            title={todo.title}
                                                            loading={loading}
                                                            toggleTodo={toggleTodo}
                                                        />)
                        :
                        <li>Not Todos!!!</li>
                    }
                </ul>
            </div>
        </div>
    )
}
export default FetchTodoList