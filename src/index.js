import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './store/slices/counterSlice';
import supplierReducer from './store/slices/supplierSlice';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { userReducer } from './store/reducers/userReducer';



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    counterState: counterReducer,
    userState: userReducer,
    suppliersState : supplierReducer
  }
})

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);

