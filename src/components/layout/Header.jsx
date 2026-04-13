import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDataContext } from '../../context/AppDataContext';
import { appIcons } from '../icons/sectionIcons';
import NavItem from './NavItem';
import BackIcon from '../ui/BackIcon';
import MenuIcon from '../ui/MenuIcon';
import CloseIcon from '../ui/CloseIcon';
import PageTransition from '../ui/PageTransition';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const { appData } = useAppDataContext();
    const navigation = appData?.navigation || [];

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            <header className='flex justify-between items-center p-4'>
                <div className='back-button'>
                    <button
                        className='flex items-center gap-2'
                        onClick={() => navigate('/')}
                    >
                        <BackIcon />
                    </button>
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

            {/* Menu Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='popup-overlay fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[--color-primary] to-[--color-secondary] z-50'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        <motion.div
                            className='popup-menu text-white flex flex-col gap-4 text-center justify-center h-full items-center'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.25 }}
                        >
                            {navigation.map((section) => (
                                <NavItem
                                    key={`${section.section_type}-${section.section_title}`}
                                    section={section}
                                    setIsOpen={setIsOpen}
                                />
                            ))}
                            <button
                                className='logout-button mt-10 flex justify-center items-center gap-4'
                                onClick={handleLogout}
                            >
                                <img
                                    src={appIcons?.logout}
                                    alt='logout button'
                                    className='h-8 rotate-180'
                                />{' '}
                                <span className='text-[--color-dark-bg]'>
                                    logout
                                </span>
                            </button>
                        </motion.div>
                        <button
                            className='close-icon absolute top-[2vh] right-[2vw] text-white'
                            onClick={() => setIsOpen(false)}
                        >
                            <CloseIcon />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
