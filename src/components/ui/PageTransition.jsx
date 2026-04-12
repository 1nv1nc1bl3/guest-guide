import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial={{
                rotateY: 90,
                opacity: 0,
            }}
            animate={{
                rotateY: 0,
                opacity: 1,
            }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.4, ease: '[0.645, 0.045, 0.355, 1.000]' }}
            style={{
                perspective: 1200,
                transformStyle: 'preserve-3d',
            }}
        >
            {children}
        </motion.div>
    );
}
