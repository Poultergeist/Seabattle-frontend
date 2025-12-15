import { useAppStore } from '@/shared/store';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useAppStore();
  return (
    <div className="relative isolate h-5 w-8 rounded-full border border-border bg-light-bg">
      <div className={'absolute size-4 rounded-full bg-primary'} />
    </div>
  );
};
