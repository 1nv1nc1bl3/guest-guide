import { Outlet } from 'react-router-dom';
import { useAppDataContext } from './context/AppDataContext';
import { ClipLoader } from 'react-spinners';

export default function App() {
    const { isLoading, error } = useAppDataContext();

    if (isLoading)
        return (
            <div className='w-screen h-screen flex justify-center items-center'>
                <ClipLoader className='w-full' size={150} />
            </div>
        );
    if (error) return <p>Something went wrong</p>;

    return <Outlet />;
}
