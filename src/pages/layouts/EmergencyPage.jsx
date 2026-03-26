import ambuIcon from '../../assets/icons/emergency.svg';

export default function EmergencyPage({ data, page }) {
    const emergencyContacts = data?.contacts;

    return (
        <div className='main-section w-full flex flex-col gap-4 md:gap-6 lg:gap-8 text-[--color-texts]'>
            <div className='dark-box flex flex-col justify-center items-center gap-8 w-[60%] bg-[--color-dark-bg] px-14 py-12 mx-auto'>
                <img
                    src={ambuIcon}
                    alt={page?.title?.rendered}
                    className='border rounded-full bg-[--color-secondary] p-4 w-[90px] h-[90px]'
                />
                <h1 className='page-title text-4xl uppercase text-[--color-secondary] text-center'>
                    in case of an emergency
                </h1>
                <a
                    className='text-2xl uppercase bg-[--color-secondary] hover:bg-[--color-texts] border-white rounded-full px-10 py-4 cursor-pointer text-[--color-texts] hover:text-[--color-secondary] transition duration-300 ease-in-out'
                    href={`tel:${data?.hero_button_phone} target='_blank'`}
                >
                    {data?.hero_button_text}
                </a>
            </div>
            <div className='boxes grid grid-rows-2 grid-cols-2 w-[60%] mx-auto gap-6'>
                {emergencyContacts.map((item, index) => (
                    <div
                        key={index}
                        className='boxaki flex flex-col justify-center items-start bg-[--color-secondary] px-2 py-4 border rounded-xl'
                    >
                        <h2 className=''>{item?.title}</h2>
                        <p>{item?.subtitle}</p>
                        <div>
                            {item?.phone && (
                                <a href={`tel:${item?.phone}`} target='_blank'>
                                    📞
                                </a>
                            )}
                            {item?.map_url && (
                                <a href={item?.map_url} target='_blank'>
                                    📌
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
