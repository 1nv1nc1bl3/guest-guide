import { appIcons } from '../../components/icons/sectionIcons';
import PageHero from '../../components/ui/PageHero';

export default function DirectionsPage({ data }) {
    // console.log(data);

    return (
        <div className='main-section w-full flex flex-col gap-4 md:gap-6 lg:gap-8 text-[--color-texts]'>
            <div className='hero-container'>
                <PageHero
                    image={data?.hero_image}
                    alt='Directions Page Banner'
                />
            </div>

            <div className='dark-box flex flex-col justify-center items-center gap-8 bg-[--color-dark-bg] px-4 py-10 mx-auto w-full'>
                <div className='border bg-[--color-secondary] rounded-full'>
                    <img
                        src={appIcons.directions}
                        alt={data?.title}
                        className='w-[80px] h-[80px] p-4'
                    />
                </div>
                <span className='text-[--color-secondary] text-lg'>
                    {data?.address}
                </span>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h2 className='page-title text-2xl uppercase text-[--color-secondary] text-center px-4'>
                        {data?.title}
                    </h2>
                    <a
                        className='text-xl bg-[--color-secondary] hover:bg-[--color-texts] border-white rounded-full px-6 py-4 cursor-pointer text-[--color-texts] hover:text-[--color-secondary] transition duration-300 ease-in-out'
                        href={data?.button_url}
                        target='_blank'
                    >
                        {data?.button_label}
                    </a>
                </div>
            </div>
        </div>
    );
}
