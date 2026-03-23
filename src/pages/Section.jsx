import { useParams } from 'react-router-dom';
import { usePlaces } from '../hooks/usePlaces';
import PlaceCard from '../components/places/PlaceCard';
import { getPlaceTypeName } from '../utils/getPlaceTypeName';
import { useAppDataContext } from '../context/AppDataContext';
export default function Section() {
    const { id } = useParams();
    const { places, loading, error } = usePlaces(id);
    // console.log(id);

    const { appData } = useAppDataContext();
    const placeTypes = appData?.place_types || [];
    const placeTitle = getPlaceTypeName(placeTypes, id);

    if (loading)
        return <p className='text-center text-slate-500'>Loading...</p>;

    if (error) {
        return <p className='text-center text-red-500'>Something went wrong</p>;
    }

    if (places.length === 0) return <p>No places found!</p>;

    return (
        <div className='flex flex-col items-center gap-10 w-full'>
            <h1 className='text-2xl uppercase'>{placeTitle}</h1>
            {places.map((place) => (
                <PlaceCard key={place?.id} place={place} type={id} />
            ))}
        </div>
    );
}
