import { Link } from 'react-router-dom';

export default function NavItem({ section, setIsOpen }) {
    let path = '/';
    if (section.section_type === 'page' && section.section_page) {
        const parts = section.section_page.split('/');
        path = `/page/${parts[parts.length - 2]}`;
    } else if (section.section_type === 'place_type') {
        path = `/places/${section.section_place_type}`;
    }
    return (
        <Link to={path} onClick={() => setIsOpen(false)}>
            <div className='dash-title'>{section.section_title}</div>
        </Link>
    );
}
