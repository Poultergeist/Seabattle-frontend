import { Link } from 'react-router-dom';

import { PAGES } from '../../../shared/config/constants/pages';

export const MainPage = () => {
  return (
    <>
      <Link to={PAGES.AUTH_PAGES_ROOT.ROOT}>{'Go to Auth Page'}</Link>
      <Link to={PAGES.PREVIEW}>{'Go to Preview page'}</Link>
      <h1>{'Welcome to the Game Main Page'}</h1>
    </>
  );
};
