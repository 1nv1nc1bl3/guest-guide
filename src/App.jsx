import { Outlet } from 'react-router-dom';
import { useAppDataContext } from './context/AppDataContext';

export default function App() {
    const { isLoading, error } = useAppDataContext();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;

    return <Outlet />;
}
