import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LINK_BASE = 'http://guestguide-cms.local/wp-json';

export default function PageScreen() {
    const [page, setPage] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const res = await fetch(
                    `${LINK_BASE}/wp/v2/pages?slug=${slug}`,
                );
                const data = await res.json();
                // console.log(data);
                // console.log(slug);
                if (data.length > 0) {
                    setPage(data[0]);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchPage();
    }, [slug]);
    if (!page) return <p>Loading page...</p>;

    return (
        <>
            <h1>{page?.title?.rendered}</h1>
            <p>{page?.acf?.wifi_fields?.wifi_name}</p>
            <p>{page?.acf?.wifi_fields?.wifi_password}</p>
        </>
    );
}
