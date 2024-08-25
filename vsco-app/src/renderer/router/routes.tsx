import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../pages/Editor';

const Dashboard = lazy(() => import('../pages/Dashboard/index'));
const Books = lazy(() => import('../pages/Dashboard/views/Books'));
const Settings = lazy(() => import('../pages/Dashboard/views/Settings'));
const Notes = lazy(() => import('../pages/Dashboard/views/Notes'));
const Profile = lazy(() => import('../pages/Dashboard/views/Profile'));

const routes = [
  {
    path: '/',
    element: <Navigate to="/dashboard/books" />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: 'books', element: <Books /> },
      { path: 'notes', element: <Notes /> },
      { path: 'settings', element: <Settings /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
  {
    path: '/editor',
    element: <Editor />,
  },
];

export default routes;
