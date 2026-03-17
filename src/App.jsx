import { Outlet } from 'react-router-dom';
import { useAppDataContext } from './context/AppDataContext';
import './App.css';
import Home from './pages/Home';

export default function App() {
    // read from Context
    const { appData, isLoading, error } = useAppDataContext();

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Something went wrong</p>;

    return (
        <section className='flex justify-center px-6 py-10'>
            <div className='min-h-screen bg-slate-100'>
                <main className='flex justify-center px-6 py-10'>
                    <div className='w-full max-w-6xl'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </section>
    );
}
