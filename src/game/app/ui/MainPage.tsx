import { Link } from 'react-router-dom';

import { ThemeSwitcher } from '@/shared/ui/ThemeProvider/ui/ThemeSwitcher';

import { PAGES } from '../../../shared/config/constants/pages';

export const MainPage = () => {
  return (
    <>
      <ThemeSwitcher />
      <Link to={PAGES.AUTH_PAGES.ROOT}>{'Go to Auth Page'}</Link>
      <h1>{'Welcome to the Game Main Page'}</h1>
    </>
  );
};
