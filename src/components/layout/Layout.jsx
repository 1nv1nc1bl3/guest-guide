import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';

export default function Layout() {
    return (
        <section className='full-app-page tracking-wide leading-relaxed'>
            <div className='app-container mx-auto h-dvh min-w-full pt-[1dvh] md:pt-[3dvh] lg:pt-[5dvh] bg-gradient-to-b from-[--color-primary] to-[--color-secondary]'>
                <Header />
                <main className='flex justify-center px-6 py-10'>
                    <div className='w-full max-w-6xl'>
                        <Outlet />
                    </div>
                </main>
                {/* <Footer /> */}
            </div>
        </section>
    );
}
