import { Link } from 'react-router-dom';

export default function SectionCard({ section }) {
    let path = '/';
    if (section.section_type === 'page' && section.section_page) {
        const parts = section.section_page.split('/');
        path = `/page/${parts[parts.length - 2]}`;
    } else if (section.section_type === 'place_type') {
        path = `/places/${section.section_place_type}`;
    }
    // console.log(path);
    return (
        <Link to={path}>
            <div className='flex flex-col gap-2 justify-center items-center text-center'>
                <div className='dash-icon flex flex-col justify-center items-center bg-white rounded-xl shadow p-4 w-[64px] h-[64px]'>
                    😋
                </div>
                <div className='dash-title'>{section.section_title}</div>
            </div>
        </Link>
    );
}
