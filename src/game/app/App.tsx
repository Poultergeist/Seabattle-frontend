import { Route, Routes } from 'react-router-dom';

import { PAGES } from '@/shared/config/constants';
import { ShowcasePage } from '@/shared/pages/Showcase/ui';

import { CookiesPolicy, MainPage } from '../pages';

import { Layout } from './ui/Layout';

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />}></Route>
        <Route path={PAGES.GAME_PAGES.COOKIES} element={<CookiesPolicy />} />
        <Route path={PAGES.PREVIEW} element={<ShowcasePage />} />
      </Route>
    </Routes>
  );
};
