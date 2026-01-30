import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionWrapper = ({
    children,
    className = '',
    id = '',
    background = 'default',
    showDivider = false
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const backgroundClasses = {
        default: '',
        light: 'bg-warm-50 dark:bg-navy-900',
        dark: 'bg-navy-800 dark:bg-navy-950 text-white',
        gradient: 'bg-gradient-to-b from-warm-50 to-white dark:from-navy-900 dark:to-navy-800',
        pattern: 'wave-pattern particle-dust',
        mandala: 'mandala-pattern',
    };

    return (
        <section
            id={id}
            ref={ref}
            className={`relative py-16 md:py-24 overflow-hidden ${backgroundClasses[background]} ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="section-container"
            >
                {children}
            </motion.div>

            {showDivider && (
                <div className="section-container">
                    <div className="mandala-divider" />
                </div>
            )}
        </section>
    );
};

export default SectionWrapper;
