import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import PageScreen from '../pages/PageScreen';
import Section from '../pages/Section';
import Page404 from '../pages/Page404';
import LoginPage from '../pages/LoginPage';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    element: <Layout />,
                    children: [
                        {
                            path: '/login',
                            element: <LoginPage />,
                        },
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
                        {
                            path: '/404',
                            element: <Page404 />,
                        },
                        {
                            path: '*',
                            element: <Page404 />,
                        },
                    ],
                },
            ],
        },
    ],
    {
        basename: '/',
    },
);
