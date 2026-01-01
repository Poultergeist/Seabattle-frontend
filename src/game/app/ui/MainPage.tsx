import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Switch } from '@/shared/ui/Switch';
import { ThemeSwitcher } from '@/shared/ui/ThemeProvider/ui/ThemeSwitcher';

import { PAGES } from '../../../shared/config/constants/pages';

export const MainPage = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <>
      <ThemeSwitcher />
      <Switch
        checked={checked}
        onCheckedChange={setChecked}
        text={['on', 'off']}
      />
      <Link to={PAGES.AUTH_PAGES.ROOT}>{'Go to Auth Page'}</Link>
      <h1>{'Welcome to the Game Main Page'}</h1>
    </>
  );
};
