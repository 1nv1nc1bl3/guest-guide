import { useEffect, useState } from 'react';

const LINK_BASE = 'http://guestguide-cms.local/wp-json';

export function usePlaces(id) {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPlace = async () => {
            try {
                // http://guestguide-cms.local/wp-json/wp/v2/places?place_type=3
                const res = await fetch(
                    `${LINK_BASE}/wp/v2/places/?place_type=${id}`,
                );
                const data = await res.json();
                // console.log('data:', data);
                // console.log('id:', id);
                if (data.length > 0) {
                    setPlaces(data);
                }
            } catch (error) {
                console.log('Error:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchPlace();
    }, [id]);

    return { places, loading, error };
}
