export default function AmenitiesPage({ data }) {
    const amenities = data?.group_repeater || [];

    return (
        <div className='flex flex-col gap-8 w-full'>
            {amenities.map((amenity, index) => (
                <div key={index} className='flex flex-col gap-2'>
                    <h3 className='font-semibold text-xl'>
                        {amenity?.group_title}
                    </h3>
                    <AmenitiesGroup amenity={amenity} />
                </div>
            ))}
        </div>
    );
}

function AmenitiesGroup({ amenity }) {
    return (
        <div>
            {amenity?.items.map((item, index) => {
                function getYoutubeId(url) {
                    if (!url) return null;
                    if (url.includes('watch?v=')) {
                        return url.split('watch?v=')[1]?.split('&')[0];
                    }
                    if (url.includes('youtu.be/')) {
                        return url.split('youtu.be/')[1]?.split('?')[0];
                    }
                    if (url.includes('/shorts/')) {
                        return url.split('/shorts/')[1]?.split('?')[0];
                    }
                    return null;
                }
                const VIDEO_ID = getYoutubeId(item?.video_url);
                // console.log(VIDEO_ID);
                const embeddedUrl = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}`;
                return (
                    <div key={index} className='flex flex-col gap-1'>
                        <p className='uppercase'>{item?.title}</p>
                        {item?.video_url && (
                            <iframe
                                className='w-full aspect-video'
                                src={embeddedUrl}
                                allowFullScreen
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
