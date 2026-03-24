import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';

export default function Layout() {
    return (
        <section className='full-app-page px-6 py-6'>
            <div className='app-container mx-auto h-dvh min-w-full bg-slate-100'>
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
