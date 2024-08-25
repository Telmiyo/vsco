import { MemoryRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './App.css';
import './styles/tailwind.css';

export default function App() {
  return (
    <MemoryRouter>
      <AppRouter />
    </MemoryRouter>
  );
}
