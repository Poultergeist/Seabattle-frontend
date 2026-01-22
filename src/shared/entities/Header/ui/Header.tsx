import { ThemeSwitcher } from '@/shared/ui/ThemeProvider/';

export const Header = () => {
  return (
    <header className="sticky rounded-b-md border-b-2 border-b-accent bg-light-bg px-2 py-5 shadow-md shadow-accent">
      <ThemeSwitcher />
    </header>
  );
};
