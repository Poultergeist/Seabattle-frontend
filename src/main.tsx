import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { AUTH_PAGE } from './shared/config/constants';
import { EnvironmentProvider } from './shared/providers/environment';

console.log('Auth Page URL:', AUTH_PAGE);

console.log('Current Environment:', import.meta.env.MODE);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EnvironmentProvider />
  </StrictMode>
);
