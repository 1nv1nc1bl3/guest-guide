import PlaceCard from '../components/sections/PlaceCard';
import { usePlaces } from '../hooks/usePlaces';
import { useParams } from 'react-router-dom';

export default function Section() {
    const { id } = useParams();
    const { places, loading, error } = usePlaces(id);

    if (loading)
        return <p className='text-center text-slate-500'>Loading...</p>;

    if (error) {
        return <p className='text-center text-red-500'>Something went wrong</p>;
    }

    if (places.length === 0) return <p>No places found!</p>;

    return (
        <div>
            {places.map((place) => (
                <PlaceCard key={place?.id} place={place} />
            ))}
        </div>
    );
}
