import { appIcons } from '../../components/icons/sectionIcons';

export default function PlaceCard({ place, placeType }) {
    const cardImage = `url('${place?.acf?.place_image}')`;
    const layout = placeType?.acf?.card_layout || 'business';
    // console.log(placeType);
    // console.log(place?.title?.rendered);

    const isBeach = layout === 'beach';
    const isBusiness = layout === 'business';
    const isEmergency = layout === 'emergency';
    const isLink = layout === 'link';

    const actions = [
        {
            value: place?.acf?.place_phone,
            href: `tel:${place?.acf?.place_phone}`,
            icon: `${appIcons?.contact}`,
        },
        {
            value: place?.acf?.place_email,
            href: `mailto:${place?.acf?.place_email}`,
            icon: `${appIcons?.email}`,
        },
        {
            value: place?.acf?.place_map,
            href: place?.acf?.place_map,
            icon: `${appIcons?.directions}`,
        },
        {
            value: place?.acf?.place_website,
            href: place?.acf?.place_website,
            icon: `${appIcons?.website}`,
        },
    ];

    return (
        <div
            className={`place-card 
            ${isBeach ? 'p-2 bg-[--color-additional]' : 'p-0 bg-gray-200'}
            bg-cover bg-center bg-no-repeat 
            border border-[--color-primary] 
            rounded-lg relative overflow-hidden 
            w-full mx-auto max-w-xl min-h-[250px]`}
            style={{ backgroundImage: cardImage }}
        >
            <div
                className={`overlay ${
                    isBeach
                        ? 'relative'
                        : 'absolute bottom-0 bg-neutral-900/85 text-white'
                } w-full p-2`}
            >
                {place?.title?.rendered && (
                    <h3
                        className={`card-title text-lg font-bold ${
                            isBeach
                                ? 'text-[--color-headings]'
                                : 'text-[--color-additional]'
                        } max-w-[75%]`}
                    >
                        {place?.title?.rendered}
                    </h3>
                )}

                {place?.acf?.place_distance && (
                    <p>{place?.acf?.place_distance}</p>
                )}

                {place?.acf?.place_description && (
                    <p className={`card-description ${isBeach ? 'mt-4' : ''}`}>
                        {place?.acf?.place_description}
                    </p>
                )}

                {place?.acf?.place_address && (
                    <p className='card-address text-sm'>
                        {place?.acf?.place_address}
                    </p>
                )}
            </div>

            <div className='actions absolute right-0 top-0 p-2 flex flex-col gap-1'>
                {actions.map(
                    (action) =>
                        action.value && (
                            <a
                                key={action.icon}
                                className={`${
                                    isBeach
                                        ? 'bg-[--color-dark-bg]'
                                        : 'bg-gray-200'
                                } rounded-full p-2`}
                                href={action.href}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    className={`w-6 ${isBeach ? 'invert' : ''}`}
                                    src={action.icon}
                                    alt='place action'
                                />
                            </a>
                        ),
                )}
            </div>
        </div>
    );
}
