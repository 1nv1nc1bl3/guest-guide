import { Capacitor } from '@capacitor/core';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';

export default function Layout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const isNative = Capacitor.isNativePlatform();

    return (
        <section className='full-app-page tracking-wide leading-relaxed'>
            <div className='app-container mx-auto min-h-dvh min-w-full pt-[1dvh] md:pt-[3dvh] lg:pt-[5dvh] bg-gradient-to-b from-[--color-primary] to-[--color-secondary] pt-[env(safe-area-inset-top)]'>
                {!isHome && <Header />}
                <main className='flex flex-col items-center min-h-dvh px-6 pt-2 pb-10'>
                    <div className='w-full max-w-6xl'>
                        <Outlet />
                    </div>
                </main>
                {/* <Footer /> */}
            </div>
        </section>
    );
}
