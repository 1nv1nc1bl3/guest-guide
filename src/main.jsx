import { AppDataProvider } from './context/AppDataContext';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

createRoot(document.getElementById('root')).render(
    <AppDataProvider>
        <RouterProvider router={router} />
    </AppDataProvider>,
);
