import React, { useState } from "react"
import { addTodo, removeTodo } from "../../store/reducers/todoSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { ITodo } from "../../types/types"


const TodoList: React.FC = () => {
    
    const todos = useAppSelector(state => state.todo)
    const dispatch = useAppDispatch()
    
    const [valueInput, setValueInput] = useState('')

    function handlerClickBtn () {
        dispatch(addTodo(valueInput))
        setValueInput('')
    }

    return (
        <div className="container">
            <div className="body__item">
                <h1 className="titleSyncTodoList">Todo List</h1>
                <div>
                    <input type="text" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                    <button onClick={handlerClickBtn}>Add Todo</button>
                </div>

                <ul>
                    { todos.length > 0 ?                 
                        todos.map((todo: ITodo) => <li className="todoItem" key={todo.id}>{todo.title}<button onClick={() => dispatch(removeTodo(todo.id))}>&times;</button></li>)
                        :
                        <li>Not Todos!!!</li>
                    }
                </ul>
            </div>
        </div>
    )
}
export default TodoList