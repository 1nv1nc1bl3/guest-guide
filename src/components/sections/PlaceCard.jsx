export default function PlaceCard({ place }) {
    return (
        <div className='mb-8'>
            <h1>{place?.title?.rendered}</h1>
            <p>{place?.acf?.place_distance}</p>
            <p>{place?.acf?.place_description}</p>
            {place?.acf?.place_map && (
                <a href={place?.acf?.place_map} target='_blank'>
                    📌
                </a>
            )}
        </div>
    );
}
