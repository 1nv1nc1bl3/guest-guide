import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WifiPage from './layouts/WifiPage';
import RulesPage from './layouts/RulesPage';
import Loader from '../components/ui/Loader';

const LINK_BASE = 'http://guestguide-cms.local/wp-json';

export default function PageScreen() {
    const [page, setPage] = useState(null);

    const layout = page?.acf?.page_layout;
    const layouts = {
        wifi: WifiPage,
        rules: RulesPage,
    };
    const Component = layouts[layout];
    const dataMap = {
        wifi: page?.acf?.wifi_fields,
        rules: page?.acf?.rules_fields,
    };
    // console.log(layout);
    const { slug } = useParams();

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const res = await fetch(
                    `${LINK_BASE}/wp/v2/pages?slug=${slug}`,
                );
                const data = await res.json();
                // console.log('data:', data);
                // console.log('slug:', slug);
                if (data.length > 0) {
                    setPage(data[0]);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchPage();
    }, [slug]);

    if (!page) return <Loader />;

    if (!Component) return <p>Unknown layout</p>;

    return (
        <div className='flex flex-col items-center gap-10 w-full'>
            <h1 className='text-2xl uppercase text-[--color-headings]'>
                {page?.title?.rendered}
            </h1>
            {Component && <Component data={dataMap[layout]} />}
        </div>
    );
}
