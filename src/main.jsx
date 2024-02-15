import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/index.js';
import { Provider } from 'react-redux';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
);