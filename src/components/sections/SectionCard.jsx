import { Link } from 'react-router-dom';
import { sectionIcons } from '../icons/sectionIcons';

export default function SectionCard({ section }) {
    let path = '/';
    if (section.section_type === 'page' && section.section_page) {
        const parts = section.section_page.split('/');
        path = `/page/${parts[parts.length - 2]}`;
    } else if (section.section_type === 'place_type') {
        path = `/places/${section.section_place_type}`;
    }
    // console.log(path);

    const icon = sectionIcons[section.section_title];

    return (
        <Link to={path} className='flex flex-col items-center w-auto'>
            <div className='flex flex-col gap-2 justify-center items-center text-center'>
                <div className='dash-icon flex flex-col justify-center items-center bg-[--color-additional] rounded-xl shadow p-4 w-[64px] h-[64px]'>
                    <img src={icon} alt={section.section_title} />
                </div>
                <div className='dash-title text-[--color-headings]'>
                    {section.section_title}
                </div>
            </div>
        </Link>
    );
}
