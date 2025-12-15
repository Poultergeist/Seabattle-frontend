import { Route, Routes } from 'react-router-dom';

import { MainPage } from './ui/MainPage';

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<MainPage />}></Route>
    </Routes>
  );
};
