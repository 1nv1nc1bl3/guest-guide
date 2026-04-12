import { useParams } from 'react-router-dom';
import { usePlaces } from '../hooks/usePlaces';
import { getPlaceTypeName } from '../utils/getPlaceTypeName';
import { useAppDataContext } from '../context/AppDataContext';
import PlaceCard from '../components/places/PlaceCard';
import Loader from '../components/ui/Loader';
import PageTransition from '../components/ui/PageTransition';

export default function Section() {
    const { id } = useParams();
    const { places, loading, error } = usePlaces(id);

    const { appData } = useAppDataContext();
    const placeTypes = appData?.place_types || [];

    const placeType = placeTypes.find(
        (type) => String(type.term_id) === String(id),
    );

    const placeTitle = getPlaceTypeName(placeTypes, id);

    if (loading) return '';

    if (error) {
        return <p className='text-center text-red-500'>Something went wrong</p>;
    }

    if (places.length === 0) return <p>No places found!</p>;

    return (
        <PageTransition>
            <div className='flex flex-col items-center gap-10 w-full'>
                <h1 className='text-3xl uppercase text-[--color-headings]'>
                    {placeTitle}
                </h1>

                {places.map((place) => (
                    <PlaceCard
                        key={place?.id}
                        place={place}
                        placeType={placeType}
                    />
                ))}
            </div>
        </PageTransition>
    );
}
