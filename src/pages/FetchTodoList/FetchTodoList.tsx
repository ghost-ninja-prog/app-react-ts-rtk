import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { ITodo } from "../../types/types"
import { fetchTodos, toggleTodo, addTodo } from "../../store/reducers/fetchTodoSlice"

import TodoItem from "../../components/TodoItem"
import TodoInputPlus from "../../components/TodoInputPlus"

import './styles.css'
import { removeTodo } from "../../store/reducers/todoSlice"


const FetchTodoList: React.FC = () => {
    
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
            <div className="body__item">
                <h1 className="titleFetchTodo">Fetch Todo List</h1>
                
                <TodoInputPlus addTodo={addTodo} />

                {error && <h3>Server error</h3>}

                <ul className="todoList">
                    { todos.length > 0 ?                 
                        todos.map((todo: ITodo) => <TodoItem 
                                                            key={todo.id} 
                                                            id={todo.id} 
                                                            completed={todo.completed}
                                                            title={todo.title}
                                                            loading={loading}
                                                            toggleTodo={toggleTodo}
                                                            removeTodo={removeTodo}
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