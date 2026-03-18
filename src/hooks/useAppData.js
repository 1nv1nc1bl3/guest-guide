import { useEffect, useState } from 'react';
import { getAppData } from '../api/guestguide';

export function useAppData() {
    const [appData, setAppData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getAppData();
                setAppData(data);
            } catch (err) {
                console.log('Error fetching Hotel data:', err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, []);

    // useEffect(() => {
    //     console.log(appData);
    // }, [appData]);

    return { appData, isLoading, error };
}
