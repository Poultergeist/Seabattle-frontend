import { Route, Routes } from 'react-router-dom';

import { PAGES } from '@/shared/config/constants';
import { QueryClientProvider } from '@/shared/providers/query-client';

import { MainPage } from '../pages/MainPage';

import { Layout } from './ui/Layout';

export const App = () => {
  return (
    <QueryClientProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PAGES.AUTH_PAGES.ROOT} element={<MainPage />}></Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};
