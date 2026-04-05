import { appIcons } from '../../components/icons/sectionIcons';

export default function DirectionsPage({ data, page }) {
    console.log(data);
    return (
        <div className='main-section w-full flex flex-col gap-4 md:gap-6 lg:gap-8 text-[--color-texts]'>
            {data?.acf?.directions_fields?.hero_image && (
                <div className='hero-container'>
                    <img
                        src={data?.acf?.directions_fields?.hero_image}
                        alt='Contact Page Banner'
                        className='h-[150px] w-full object-cover'
                    />
                </div>
            )}
            <div className='dark-box flex flex-col justify-center items-center gap-8 w-[90%] bg-[--color-dark-bg] px-4 py-10 mx-auto'>
                <img
                    src={appIcons.directions}
                    alt={page?.title?.rendered}
                    className='border rounded-full bg-[--color-secondary] p-4 w-[90px] h-[90px]'
                />
                <h1 className='page-title text-3xl uppercase text-[--color-secondary] text-center'>
                    {data?.acf?.directions_fields?.title}
                </h1>
                <a
                    className='text-2xl uppercase bg-[--color-secondary] hover:bg-[--color-texts] border-white rounded-full px-10 py-4 cursor-pointer text-[--color-texts] hover:text-[--color-secondary] transition duration-300 ease-in-out'
                    href={data?.acf?.directions_fields?.button_url}
                    target='_blank'
                >
                    {data?.acf?.directions_fields?.button_label}
                </a>
            </div>
        </div>
    );
}
