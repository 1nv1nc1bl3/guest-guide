import { useAppDataContext } from '../context/AppDataContext';

export default function Home() {
    const { hotels } = useAppDataContext();

    return (
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {hotels.map((hotel) => (
                <div key={hotel.id} className='border rounded-lg p-4 shadow-sm'>
                    <h2 className='text-xl font-semibold'>{hotel.name}</h2>
                </div>
            ))}
        </div>
    );
}
