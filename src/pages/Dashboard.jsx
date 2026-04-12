import { useAppDataContext } from '../context/AppDataContext';
import SectionCard from '../components/sections/SectionCard';
import { ClipLoader } from 'react-spinners';
import PageTransition from '../components/ui/PageTransition';

export default function Dashboard() {
    const { appData, isLoading, error } = useAppDataContext();
    const sections = appData?.navigation || [];
    // console.log(sections);

    if (isLoading)
        return (
            <p className='text-center text-slate-500'>Loading Dashboard...</p>
        );

    if (error) {
        return <p className='text-center text-red-500'>Something went wrong</p>;
    }

    return (
        <PageTransition>
            <div className='dashboard flex flex-col justify-center items-center gap-2 md:gap-10 lg:gap-12'>
                <img
                    className='w-20 h-20'
                    src={appData?.settings?.global_hotel_logo}
                    alt={appData?.settings?.global_hotel_name}
                />
                <h1 className='dash-head uppercase text-[--color-headings] text-lg text-center'>
                    tap the buttons to explore
                </h1>
                {sections.length === 0 && (
                    <div className='col-span-3 row-span-auto flex justify-center items-center'>
                        <ClipLoader className='w-full' size={150} />
                    </div>
                )}
                <div className='icons-grid grid grid-cols-3 gap-4 md:gap-4 lg:gap-8 justify-items-center mt-4'>
                    {sections.map((section) => (
                        <SectionCard
                            key={`${section.section_type}-${section.section_title}`}
                            section={section}
                        />
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}
