import { useEffect } from 'react';

import { useAppStore } from '../store';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

export function useTheme() {
  const { theme, setTheme } = useAppStore();

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const changeTheme = (nextTheme?: Theme) => {
    setTheme(nextTheme || (theme === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    changeTheme,
  };
}
