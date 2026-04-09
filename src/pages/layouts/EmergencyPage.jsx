import { appIcons } from '../../components/icons/sectionIcons';

export default function EmergencyPage({ data, page }) {
    const emergencyContacts = data?.contacts;

    return (
        <div className='main-section w-full flex flex-col gap-4 md:gap-6 lg:gap-8 text-[--color-texts]'>
            <div className='dark-box flex flex-col justify-center items-center gap-8 w-full bg-[--color-dark-bg] px-4 py-10 mx-auto'>
                <img
                    src={appIcons?.emergency}
                    alt={page?.title?.rendered}
                    className='border rounded-full bg-[--color-secondary] p-4 w-[90px] h-[90px]'
                />
                <h1 className='page-title text-3xl uppercase text-[--color-secondary] text-center'>
                    in case of an emergency
                </h1>
                <a
                    className='text-2xl uppercase bg-[--color-secondary] hover:bg-[--color-texts] border-white rounded-full px-10 py-4 cursor-pointer text-[--color-texts] hover:text-[--color-secondary] transition duration-300 ease-in-out'
                    href={`tel:${data?.hero_button_phone}`}
                    target='_blank'
                >
                    {data?.hero_button_text}
                </a>
            </div>
            <div className='boxes grid grid-rows-2 grid-cols-2 w-full mx-auto gap-4'>
                {emergencyContacts.map((item, index) => (
                    <div
                        key={index}
                        className='boxaki relative min-h-[200px] flex flex-col justify-start items-start bg-[--color-secondary] px-4 py-6 border rounded-xl gap-2'
                    >
                        <h2 className='font-bold'>{item?.title}</h2>
                        <p className='mb-2'>{item?.subtitle}</p>
                        <div className='flex items-center gap-2 absolute bottom-4'>
                            {item?.phone && (
                                <a href={`tel:${item?.phone}`} target='_blank'>
                                    <img
                                        className='w-6'
                                        src={appIcons?.contact}
                                        alt=''
                                    />
                                </a>
                            )}
                            {item?.map_url && (
                                <a href={item?.map_url} target='_blank'>
                                    <img
                                        className='w-6'
                                        src={appIcons?.directions}
                                        alt=''
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
