import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { App } from 'components/App/App';
import { GlobalStyles } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>
);
