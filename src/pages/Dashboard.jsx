import { useAppDataContext } from '../context/AppDataContext';
import SectionCard from '../components/sections/SectionCard';

export default function Dashboard() {
    const { appData, isLoading, error } = useAppDataContext();
    const sections = appData?.navigation || [];
    console.log(sections);

    if (isLoading)
        return <p className='text-center text-slate-500'>Loading...</p>;

    if (error) {
        return <p className='text-center text-red-500'>Something went wrong</p>;
    }

    return (
        <div className='grid grid-cols-2 gap-4'>
            {sections.map((section) => (
                <SectionCard
                    key={`${section.section_type}-${section.section_title}`}
                    section={section}
                />
            ))}
        </div>
    );
}
