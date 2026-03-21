import { Outlet } from 'react-router-dom';
import { useAppDataContext } from './context/AppDataContext';

export default function App() {
    // read from Context
    const { appData, isLoading, error } = useAppDataContext();

    if (isLoading) return <p>Loading1...</p>;

    if (error) return <p>Something went wrong</p>;

    return (
        <section className='px-6 py-6'>
            <div className='mx-auto min-h-screen min-w-full bg-slate-100'>
                <main className='flex justify-center px-6 py-10 font-montserrat'>
                    <div className='w-full max-w-6xl'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </section>
    );
}
