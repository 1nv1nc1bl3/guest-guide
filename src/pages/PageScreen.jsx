import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/ui/Loader';
import WifiPage from './layouts/WifiPage';
import RulesPage from './layouts/RulesPage';
import CheckinPage from './layouts/CheckinPage';
import EmergencyPage from './layouts/EmergencyPage';
import ArticlePage from './layouts/ArticlePage';

const LINK_BASE = 'https://api.mystayguide.app/wp-json';

export default function PageScreen() {
    const [page, setPage] = useState(null);

    const layout = page?.acf?.page_layout;
    const layouts = {
        wifi: WifiPage,
        rules: RulesPage,
        checkin: CheckinPage,
        emergency: EmergencyPage,
        article: ArticlePage,
    };
    const Component = layouts[layout];
    const dataMap = {
        wifi: page?.acf?.wifi_fields,
        rules: page?.acf?.rules_fields,
        checkin: page?.acf?.checkinout_fields,
        emergency: page?.acf?.emergency_fields,
        article: page?.acf?.article_fields,
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
        <div
            className={`flex flex-col items-center ${layout !== 'emergency' && 'gap-10'} w-full`}
        >
            <h1 className='page-title text-2xl text-center uppercase text-[--color-headings]'>
                {layout !== 'emergency' ? page?.title?.rendered : ''}
            </h1>
            {Component && <Component page={page} data={dataMap[layout]} />}
        </div>
    );
}
