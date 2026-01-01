import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/base.css';

import { App } from './App';
import { PAGES } from './shared/config/constants/pages';
console.group('App startup debug');
console.log('Available pages:', PAGES);
console.log('Environment variables:', import.meta.env);
console.groupEnd();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
