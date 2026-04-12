export default function PageHero({ image, alt = '', children }) {
    if (!image && !children) return null;

    return (
        <div className='w-full'>
            {image && (
                <img
                    src={image}
                    alt={alt}
                    className='w-full h-[150px] object-cover'
                />
            )}

            {children && <div className='mt-4'>{children}</div>}
        </div>
    );
}
