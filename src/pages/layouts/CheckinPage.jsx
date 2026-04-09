export default function CheckinPage({ data }) {
    const checkFieldStyle = `check-field gap-4 flex flex-col justify-center items-center w-full`;
    const whiteBoxStyle = `white-box p-8 bg-[--color-secondary] flex flex-col justify-center items-center gap-2 w-full`;

    const timeFieldStyle = `text-4xl font-semibold text-center`;

    return (
        <div className='flex flex-col items-center w-full gap-2 md:gap-8 lg:gap-10 text-[--color-texts]'>
            <div className={checkFieldStyle}>
                <div className={whiteBoxStyle}>
                    <p className={timeFieldStyle}>{data?.checkin_time}</p>
                    <h2 className='uppercase text-2xl'>Check-in</h2>
                </div>
                <p className='check-text px-4'>{data?.checkin_text}</p>
            </div>
            <div className={checkFieldStyle}>
                <div className={whiteBoxStyle}>
                    <p className={timeFieldStyle}>{data?.checkout_time}</p>
                    <h2 className='uppercase text-2xl'>Check-out</h2>
                </div>
                <p className='check-text px-4'>{data?.checkout_text}</p>
            </div>
        </div>
    );
}
