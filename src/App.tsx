import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import CounterPage from './pages/CounterPage/CounterPage';
import ErrorPage from './pages/Error-page/ErrorPage';
import AsyncTodoList from './pages/AsyncTodoList/AsyncTodoList';
import HomePage from './pages/HomePage/HomePage';
import Posts from './pages/Posts/Posts';
import TodoList from './pages/TodoList/TodoList';
import KanbanBoard from './pages/KanbanBoard/KanbanBoard';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/counter',
    element: <CounterPage />,
  },
  {
    path: '/todolist',
    element: <TodoList />,
  },
  {
    path: '/asynctodolist',
    element: <AsyncTodoList />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
  {
    path: '/kanban_board',
    element: <KanbanBoard />
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
