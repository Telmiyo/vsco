import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto animate-fade animate-once animate-duration-[1000ms] animate-delay-100 animate-ease-linear">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet /> {/* Renders the current sub-route */}
        </Suspense>
      </div>
    </div>
  );
}

export default DashboardLayout;
