import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './appBar/AppBar';

export const SharedLayout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
    </div>
  );
};