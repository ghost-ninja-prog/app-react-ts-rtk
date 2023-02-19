import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import App from './App';
import { persistor, store } from './store/store';

import './styles/reset.css'
import './styles/common.css'


const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <App />
      </PersistGate>
    </Provider>
);