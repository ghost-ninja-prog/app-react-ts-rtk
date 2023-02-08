import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CounterPage from './pages/CounterPage/CounterPage';
import ErrorPage from './pages/Error-page/ErrorPage';
import FetchTodoList from './pages/FetchTodoList/FetchTodoList';
import HeaderNavigation from './pages/HeaderNavigation/HeaderNavigation';
import TodoList from './pages/TodoList/TodoList';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderNavigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/counter',
        element: <CounterPage />,
      },
      {
        path: '/todolist',
        element: <TodoList />,
      },
      {
        path: '/fetchtodolist',
        element: <FetchTodoList />,
      },
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />   
  );
}

export default App;
