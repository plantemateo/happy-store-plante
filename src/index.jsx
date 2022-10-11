import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { CountItemProvider } from './context/CountItemContext';
import { CarritoStoreProvider } from './context/CarritoStoreContext';
import { SpinnerProvider } from './context/SpinnerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CountItemProvider>
    <SpinnerProvider>
      <CarritoStoreProvider>
        <App/>
      </CarritoStoreProvider>
    </SpinnerProvider>
  </CountItemProvider>
);

