import { motion } from 'framer-motion';

export default function PageTransition({
    children,
    elementAnimation = 'flip',
}) {
    if (elementAnimation === 'fade') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='w-full h-full'
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ rotateY: 45, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -45, opacity: 0 }}
            transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
            }}
        >
            {children}
        </motion.div>
    );
}
