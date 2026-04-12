import { appIcons } from '../../components/icons/sectionIcons';
import PageHero from '../../components/ui/PageHero';
import { useAppDataContext } from '../../context/AppDataContext';

export default function ContactPage({ data }) {
    const { appData } = useAppDataContext();
    const contact = appData?.settings || {};

    return (
        <div className='contact-page-container w-full flex flex-col gap-8'>
            <div className='hero-container'>
                <PageHero
                    image={data?.contact_banner}
                    alt='Contact Page Banner'
                />
            </div>
            <div className='items-container flex flex-col gap-8'>
                {contact?.global_hotel_address && (
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img
                            src={appIcons?.directions}
                            alt='Address'
                            className='w-10'
                        />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-bold text-xl'>Address</h3>
                            <a
                                href={contact?.global_hotel_map_url}
                                target='_blank'
                            >
                                {contact?.global_hotel_address}
                            </a>
                        </div>
                    </div>
                )}
                {contact?.global_hotel_phone && (
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img
                            src={appIcons?.contact}
                            alt='Phone'
                            className='w-10'
                        />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-bold text-xl'>Phone</h3>
                            <a
                                href={`tel:${contact?.global_hotel_phone}`}
                                target='_blank'
                            >
                                {contact?.global_hotel_phone}
                            </a>
                        </div>
                    </div>
                )}
                {contact?.global_hotel_email && (
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img
                            src={appIcons?.email}
                            alt='Email'
                            className='w-10'
                        />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-bold text-xl'>Email</h3>
                            <a
                                href={`mailto:${contact?.global_hotel_email}`}
                                target='_blank'
                            >
                                {contact?.global_hotel_email}
                            </a>
                        </div>
                    </div>
                )}
                {contact?.business_website && (
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img
                            src={appIcons?.website}
                            alt='Website'
                            className='w-10'
                        />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-bold text-xl'>Website</h3>
                            <a
                                href={`https://${contact?.business_website}`}
                                target='_blank'
                            >
                                {contact?.business_website}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
