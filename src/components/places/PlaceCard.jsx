export default function PlaceCard({ place, type }) {
    const cardImage = `url('${place?.acf?.place_image}')`;

    const actions = [
        {
            value: place?.acf?.place_phone,
            href: `tel:${place?.acf?.place_phone}`,
            icon: '📞',
        },
        {
            value: place?.acf?.place_email,
            href: `mailto:${place?.acf?.place_email}`,
            icon: '📧',
        },
        {
            value: place?.acf?.place_map,
            href: place?.acf?.place_map,
            icon: '📌',
        },
        {
            value: place?.acf?.place_website,
            href: place?.acf?.place_website,
            icon: '🌐',
        },
    ];

    return (
        <div
            className={`place-card ${type === '3' ? 'p-2 bg-slate-200' : 'p-0 bg-gray-200'} bg-cover bg-center bg-no-repeat border rounded-lg relative overflow-hidden w-full mx-auto max-w-xl h-[220px]`}
            style={{ backgroundImage: cardImage }}
        >
            <div
                className={`overlay ${type === '3' ? 'relative' : 'absolute bottom-0 bg-neutral-900/85 text-white'} w-[100%] p-2 `}
            >
                {place?.title?.rendered && (
                    <h3 className='card-title text-xl font-bold'>
                        {place?.title?.rendered}
                    </h3>
                )}
                {place?.acf?.place_distance && (
                    <p>{place?.acf?.place_distance}</p>
                )}
                {place?.acf?.place_description && (
                    <p
                        className={`card-description max-w-[75%] ${type === '3' && 'mt-4'}`}
                    >
                        {place?.acf?.place_description}
                    </p>
                )}
                {place?.acf?.place_address && (
                    <p className='card-address'>{place?.acf?.place_address}</p>
                )}
            </div>
            <div className='actions absolute right-0 top-0 p-2 flex flex-col gap-1'>
                {actions.map(
                    (action) =>
                        action.value && (
                            <a
                                key={action.icon}
                                className={`${type === '3' ? 'bg-slate-100' : 'bg-gray-200'} rounded-full p-2`}
                                href={action.href}
                            >
                                {action.icon}
                            </a>
                        ),
                )}
            </div>
        </div>
    );
}
