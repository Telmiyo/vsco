import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../modules/Editor';

const Dashboard = lazy(() => import('../modules/Dashboard/index'));
const Books = lazy(() => import('../modules/Dashboard/views/Books'));
const Settings = lazy(() => import('../modules/Dashboard/views/Settings'));
const Notes = lazy(() => import('../modules/Dashboard/views/Notes'));
const Profile = lazy(() => import('../modules/Dashboard/views/Profile'));

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
