import { useAppDataContext } from '../context/AppDataContext';

export default function Dashboard() {
    const { appData, isLoading, error } = useAppDataContext();
    const sections = appData.navigation;
    console.log(sections);

    if (isLoading)
        return <p className='text-center text-slate-500'>Loading...</p>;

    if (error) {
        return <p className='text-center text-red-500'>Something went wrong</p>;
    }

    return (
        <div className='space-y-6'>
            <h1 className='text-3xl font-bold'>Dashboard</h1>

            <pre className='bg-slate-900 text-green-400 p-4 rounded'>
                {JSON.stringify(appData, null, 2)}
            </pre>
        </div>
    );
}
