import { Outlet } from 'react-router-dom';

import { Header } from '@/shared/entities/Header';

export const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
