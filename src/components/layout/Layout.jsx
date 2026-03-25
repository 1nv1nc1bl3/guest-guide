import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';

export default function Layout() {
    return (
        <section className='full-app-page'>
            <div className='app-container mx-auto h-dvh min-w-full bg-gradient-to-b from-[--color-primary] to-[--color-secondary]'>
                <Header />
                <main className='flex justify-center px-6 py-10 font-montserrat'>
                    <div className='w-full max-w-6xl'>
                        <Outlet />
                    </div>
                </main>
                {/* <Footer /> */}
            </div>
        </section>
    );
}
