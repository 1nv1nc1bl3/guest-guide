import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDataContext } from '../../context/AppDataContext';
import NavItem from './NavItem';
import BackIcon from '../ui/BackIcon';
import MenuIcon from '../ui/MenuIcon';
import CloseIcon from '../ui/CloseIcon';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    const { appData } = useAppDataContext();
    const navigation = appData?.navigation || [];

    return (
        <>
            <header className='flex justify-between items-center'>
                <div className='back-button'>
                    {!isHome ? (
                        <button
                            className='flex items-center gap-2'
                            onClick={() => navigate('/')}
                        >
                            <BackIcon />
                        </button>
                    ) : (
                        ''
                    )}
                </div>
                <div className='menu-button'>
                    <button
                        className='flex flex-row-reverse items-center gap-2'
                        onClick={() => setIsOpen(true)}
                    >
                        <MenuIcon />
                    </button>
                </div>
            </header>
            {isOpen && (
                <div className='popup-overlay fixed top-0 left-0 w-[100%] h-[100%] bg-gray-800 z-50 flex flex-col justify-start items-center'>
                    <div className='popup-menu text-white flex flex-col gap-4 text-center justify-center h-[100%]'>
                        {navigation.map((section) => (
                            <NavItem
                                key={`${section.section_type}-${section.section_title}`}
                                section={section}
                                setIsOpen={setIsOpen}
                            />
                        ))}
                    </div>
                    <button
                        className='close-icon absolute top-[2vh] right-[2vw] text-white'
                        onClick={() => setIsOpen(false)}
                    >
                        <CloseIcon />
                    </button>
                </div>
            )}
        </>
    );
}
