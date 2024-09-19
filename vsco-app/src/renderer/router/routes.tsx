import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../modules/editor';

const Dashboard = lazy(() => import('../modules/dashboard/index'));
const Books = lazy(() => import('../modules/dashboard/views/Books'));
const Settings = lazy(() => import('../modules/dashboard/views/Settings'));
const Notes = lazy(() => import('../modules/dashboard/views/Notes'));
const Profile = lazy(() => import('../modules/dashboard/views/Profile'));

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
