import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/shared/hooks';

import { Switch } from '../../Switch';

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  const themeIcon =
    theme === 'dark' ? (
      <Moon className="p-1 text-white" />
    ) : (
      <Sun className="p-1 text-white" />
    );

  return (
    <Switch
      checked={theme === 'dark'}
      onCheckedChange={isDark => changeTheme(isDark ? 'dark' : 'light')}
      icon={themeIcon}
      variant="theme"
      aria-label="Theme switcher"
    />
  );
};
