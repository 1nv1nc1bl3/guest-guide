import wifiIcon from '../../assets/icons/wifi.svg';

export default function WifiPage({ data }) {
    const blockStyle = `p-8 bg-[--color-secondary] flex flex-col justify-center items-center text-center gap-2 w-[75%]`;

    return (
        <div className='flex flex-col items-center w-full gap-2 md:gap-8 lg:gap-10 text-[--color-texts]'>
            <img
                className='border rounded-full bg-[--color-secondary] p-4 w-[90px] h-[90px]'
                src={wifiIcon}
                alt={'123'}
            />
            <div className={`${blockStyle}`}>
                <p className='text-3xl'>{data.wifi_name}</p>
                <h2 className='uppercase text-xl'>Wifi Name</h2>
            </div>
            <div className={`${blockStyle}`}>
                <p className='text-3xl'>{data.wifi_password}</p>
                <h2 className='uppercase text-xl'>Password</h2>
            </div>
        </div>
    );
}
