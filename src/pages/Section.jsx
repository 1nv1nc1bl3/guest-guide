import { useParams } from 'react-router-dom';
import { usePlaces } from '../hooks/usePlaces';
import PlaceCard from '../components/sections/PlaceCard';

export default function Section() {
    const { id } = useParams();
    const { places, loading, error } = usePlaces(id);
    // console.log(id);

    if (loading)
        return <p className='text-center text-slate-500'>Loading...</p>;

    if (error) {
        return <p className='text-center text-red-500'>Something went wrong</p>;
    }

    if (places.length === 0) return <p>No places found!</p>;

    return (
        <div className='flex flex-col gap-4 w-full'>
            {places.map((place) => (
                <PlaceCard key={place?.id} place={place} type={id} />
            ))}
        </div>
    );
}
