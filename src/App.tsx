import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '@/app/styles/base.css';
import '@/app/styles/index.css';

import { EnvironmentProvider } from './shared/providers/environment';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<EnvironmentProvider />}>
          <Route path="*" element={null} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
