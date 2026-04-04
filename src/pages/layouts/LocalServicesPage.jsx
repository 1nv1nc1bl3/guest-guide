export default function LocalServicesPage({ data }) {
    const services = data?.article_sections || [];

    return (
        <div className='flex flex-col items-center gap-10 w-full'>
            {services.map((card) => (
                <div
                    key={card.title}
                    className='p-0 bg-gray-200
            bg-cover bg-center bg-no-repeat 
            border border-[--color-primary] 
            rounded-lg relative overflow-hidden 
            w-full mx-auto max-w-xl h-[220px]'
                >
                    <div className='overlay absolute bottom-0 bg-neutral-900/85 text-white w-full px-4 py-3'>
                        {card.title && (
                            <h3 className='card-title text-xl font-bold'>
                                {card?.title}
                            </h3>
                        )}
                    </div>

                    <div className='actions absolute right-0 top-0 p-2 flex flex-col gap-1'>
                        {card?.link_url && (
                            <a
                                className='bg-gray-200 rounded-full p-2'
                                href={card?.link_url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                🌐
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
