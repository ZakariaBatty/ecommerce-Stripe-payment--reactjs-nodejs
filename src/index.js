import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import ContextManagerProvider from './context/ContextManager';

ReactDOM.render(
  <BrowserRouter>
    <ContextManagerProvider>
      <App />
    </ContextManagerProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
