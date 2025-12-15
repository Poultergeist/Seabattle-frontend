import { Link } from 'react-router-dom';

import { PAGES } from '@/shared/config/constants';

export const MainPage = () => {
  return (
    <>
      <Link to={PAGES.GAME_PAGES.ROOT}>{'Go to Game Page'}</Link>
      <h1>{'Welcome to the Auth Main Page'}</h1>
    </>
  );
};
