import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

function Layout() {
  return (
    <>
      <header>
        <Navigation />
        <UserMenu />
      </header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
