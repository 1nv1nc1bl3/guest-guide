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
        <div className='grid grid-cols-3 gap-8 justify-items-center'>
            {sections.length === 0 && (
                <div className='col-span-3 row-span-auto flex justify-center items-center'>
                    <ClipLoader className='w-full' size={150} />
                </div>
            )}
            {sections.map((section) => (
                <SectionCard
                    key={`${section.section_type}-${section.section_title}`}
                    section={section}
                />
            ))}
        </div>
    );
}
