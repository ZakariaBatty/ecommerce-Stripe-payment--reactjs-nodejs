import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductsContextProvider from './context/products-context';

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
