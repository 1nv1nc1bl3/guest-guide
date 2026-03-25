import { useAppDataContext } from '../context/AppDataContext';
import SectionCard from '../components/sections/SectionCard';
import { ClipLoader } from 'react-spinners';

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
        <div className='flex flex-col justify-center items-center gap-10 md:gap-8 lg:gap-10'>
            <h1 className='uppercase text-[--color-headings] text-lg text-center'>
                tap the buttons to explore
            </h1>
            {sections.length === 0 && (
                <div className='col-span-3 row-span-auto flex justify-center items-center'>
                    <ClipLoader className='w-full' size={150} />
                </div>
            )}
            <div className='grid grid-cols-3 gap-3 md:gap-4 lg:gap-8 justify-items-center'>
                {sections.map((section) => (
                    <SectionCard
                        key={`${section.section_type}-${section.section_title}`}
                        section={section}
                    />
                ))}
            </div>
        </div>
    );
}
