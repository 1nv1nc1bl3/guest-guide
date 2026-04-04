import { appIcons } from '../../components/icons/sectionIcons';

export default function ArticleContentPage({ data }) {
    const subjects = data?.article_sections || [];

    return (
        <div className='flex flex-col gap-8 w-[90%]'>
            {data?.hero_image && (
                <div className='hero-container w-full'>
                    <img
                        className='hero-image h-[150px] w-full rounded-lg object-cover'
                        src={data?.hero_image}
                        alt='Things to Know Banner'
                    />
                </div>
            )}
            <div className='to-know-subjects flex flex-col gap-8'>
                {subjects.map((sub, index) => (
                    <div key={index} className='flex flex-col gap-1'>
                        {sub?.title && (
                            <h3 className='font-semibold'>{sub?.title}</h3>
                        )}
                        {sub?.content && (
                            <p
                                className='article-content'
                                dangerouslySetInnerHTML={{
                                    __html: sub?.content,
                                }}
                            ></p>
                        )}

                        {sub?.link_label && sub?.link_url && (
                            <div className='flex items-end justify-start gap-3 text-stone-500'>
                                <span className='mb-[-5px]'>
                                    {sub?.link_label}
                                </span>
                                <a
                                    href={sub?.link_url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        className='w-8'
                                        src={appIcons?.directions}
                                        alt={sub?.title}
                                    />
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
