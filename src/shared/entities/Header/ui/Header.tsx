import { Link } from 'react-router-dom';

import { GAME_ROOT, PAGES } from '@/shared/config';
import { ThemeSwitcher } from '@/shared/ui/ThemeProvider/';

export const Header = () => {
  const location = window.location.origin;

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between rounded-b-md border-b-2 border-b-accent bg-light-bg px-2 py-5 shadow-md shadow-accent">
      <div className="flex flex-row gap-2">
        <Link to={PAGES.GAME_PAGES_ROOT.ROOT}>{'Home'}</Link>
        {location === GAME_ROOT && (
          <Link to={PAGES.GAME_PAGES.COOKIES}>{'Cookies Policy'}</Link>
        )}
        {location !== GAME_ROOT && (
          <a href={PAGES.GAME_PAGES_ROOT.COOKIES}>{'Cookies Policy'}</a>
        )}
      </div>
      <ThemeSwitcher />
    </header>
  );
};
