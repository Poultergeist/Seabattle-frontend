import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { App } from './App';
import { PAGES } from './shared/config/constants/pages';

console.log('Available Pages:', PAGES);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
