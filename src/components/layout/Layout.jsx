import { Capacitor } from '@capacitor/core';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import { AnimatePresence } from 'framer-motion';
// import Footer from './Footer';

export default function Layout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const isNative = Capacitor.isNativePlatform();

    return (
        <section className='full-app-page tracking-wide leading-relaxed'>
            <div className='app-container mx-auto min-h-dvh min-w-full bg-gradient-to-b from-[--color-primary] to-[--color-secondary] pt-[env(safe-area-inset-top)]'>
                {!isHome && <Header />}
                <main className='flex flex-col items-center min-h-dvh px-6 pt-10 pb-10'>
                    <div
                        className='w-full max-w-6xl'
                        style={{ perspective: '1200px' }}
                    >
                        <AnimatePresence mode='wait'>
                            <Outlet key={location.pathname} />
                        </AnimatePresence>
                    </div>
                </main>
                {/* <Footer /> */}
            </div>
        </section>
    );
}
