import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useAppDataContext } from './context/AppDataContext';

export default function App() {
    const { appData, isLoading, error } = useAppDataContext();

    const styleSetProperty = document.documentElement.style;

    // import site colors from settings
    useEffect(() => {
        styleSetProperty.setProperty(
            '--color-primary',
            appData?.settings?.global_main_color,
        );
        styleSetProperty.setProperty(
            '--color-secondary',
            appData?.settings?.global_sec_color,
        );
        styleSetProperty.setProperty(
            '--color-additional',
            appData?.settings?.global_add_color,
        );
        styleSetProperty.setProperty(
            '--color-dark-bg',
            appData?.settings?.global_dark_bg_color,
        );
        styleSetProperty.setProperty(
            '--color-headings',
            appData?.settings?.global_head_color,
        );
        styleSetProperty.setProperty(
            '--color-texts',
            appData?.settings?.global_texts_color,
        );
    }, [appData]);

    if (isLoading)
        return (
            <div className='w-screen h-screen flex justify-center items-center'>
                <ClipLoader className='w-full' size={150} />
            </div>
        );
    if (error) return <p>Something went wrong</p>;

    return <Outlet />;
}
