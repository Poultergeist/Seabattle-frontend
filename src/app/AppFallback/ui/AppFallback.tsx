import { Route, Routes } from 'react-router-dom';

import { ThemeSwitcher } from '@/shared/ui/ThemeProvider';

export const AppFallback = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <ThemeSwitcher />
            <h1>{'I think that you are not supposed to be here'}</h1>
          </>
        }
      />
    </Routes>
  );
};
