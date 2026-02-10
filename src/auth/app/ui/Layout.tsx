import { Outlet } from 'react-router-dom';

import { Header } from '@/shared/entities/Header';
import { CookiesBanner } from '@/shared/ui/CookiesBanner';

export const Layout = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="isolate flex flex-1 flex-col">
        <Outlet />
      </main>
      <CookiesBanner />
    </div>
  );
};
