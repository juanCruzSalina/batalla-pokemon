import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { UIProvider } from './context/ui/UIProvider';
import reportWebVitals from './reportWebVitals';
import { EntryProvider } from './context/entry/EntryProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UIProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
