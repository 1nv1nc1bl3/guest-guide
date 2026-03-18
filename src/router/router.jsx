import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Dashboard from '../pages/Dashboard';
import PageScreen from '../pages/PageScreen';
import Section from '../pages/Section';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'page/:slug',
                element: <PageScreen />,
            },
            {
                path: 'places/:id',
                element: <Section />,
            },
        ],
    },
]);
