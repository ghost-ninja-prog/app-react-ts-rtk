import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store/store';

import './styles/reset.css'
import './styles/common.css'

import Error from './pages/Error-page/Error';
import Counter from './pages/Counter/Counter';
import TodoList from './pages/TodoList/TodoList';
import FetchTodoList from './pages/FetchTodoList/FetchTodoList';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/counter',
        element: <Counter />,
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

root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);