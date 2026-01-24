import { Outlet } from 'react-router-dom';

import { Header } from '@/shared/entities/Header';
import { CookiesBanner } from '@/shared/ui/CookiesBanner';

export const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <CookiesBanner />
    </div>
  );
};
