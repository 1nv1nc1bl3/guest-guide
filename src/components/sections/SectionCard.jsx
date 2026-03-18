import { Link } from 'react-router-dom';

export default function SectionCard({ section }) {
    let path = '/';
    if (section.section_type === 'page' && section.section_page) {
        const parts = section.section_page.split('/');
        path = `/page/${parts[parts.length - 2]}`;
    } else if (section.section_type === 'place_type') {
        path = `/places/${section.section_place_type}`;
    }
    console.log(path);
    return (
        <Link to={path}>
            <div className='bg-white rounded-xl shadow p-4 text-center'>
                {section.section_title}
            </div>
        </Link>
    );
}
