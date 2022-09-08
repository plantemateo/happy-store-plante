import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { CountItemProvider } from './context/CountItemContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CountItemProvider>
    <App/>
  </CountItemProvider>
);

