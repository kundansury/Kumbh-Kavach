import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import w1 from '../assets/wristband-1.png';
import w2 from '../assets/wristband-2.png';
import w3 from '../assets/wristband-3.png';

const WristbandShowcase = () => {
    const containerRef = useRef(null);

    // Wristband data with images and labels
    const wristbands = [
        { img: w1, label: 'Front View', description: 'Clear display interface' },
        { img: w2, label: 'Side Profile', description: 'Sleek curved design' },
        { img: w3, label: 'On-Wrist Ergonomics', description: 'Comfortable fit' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-cycle through wristbands
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % wristbands.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-navy-900 via-black to-navy-900">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="section-container relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-saffron-200 to-saffron-500"
                    >
                        360° Protection
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-warm-200 max-w-2xl mx-auto text-lg"
                    >
                        Designed for comfort, engineered for safety. The Kumbh Kavach wristband is your digital guardian in the crowd.
                    </motion.p>
                </div>

                {/* Horizontal Card Carousel */}
                <div className="relative max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                        {wristbands.map((wristband, index) => {
                            const isActive = index === currentIndex;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className={`relative group cursor-pointer transition-all duration-500 ${isActive ? 'scale-105 z-10' : 'scale-100 opacity-75 hover:opacity-100'
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    {/* Glass Card */}
                                    <div className={`
                                        relative rounded-3xl overflow-hidden
                                        bg-gradient-to-br from-white/10 to-white/5
                                        backdrop-blur-xl
                                        border transition-all duration-500
                                        ${isActive
                                            ? 'border-saffron-500/50 shadow-[0_0_40px_rgba(255,160,0,0.3)]'
                                            : 'border-white/10 shadow-lg'
                                        }
                                        p-6
                                    `}>
                                        {/* Active Indicator */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeCard"
                                                className="absolute top-4 right-4 w-3 h-3 bg-saffron-500 rounded-full shadow-lg shadow-saffron-500/50"
                                                transition={{ type: "spring", duration: 0.6 }}
                                            />
                                        )}

                                        {/* Wristband Image */}
                                        <div className="relative aspect-square bg-gradient-to-br from-warm-100 to-warm-50 rounded-2xl overflow-hidden mb-4">
                                            <AnimatePresence mode="wait">
                                                <motion.img
                                                    key={`img-${index}-${isActive}`}
                                                    src={wristband.img}
                                                    alt={wristband.label}
                                                    className="w-full h-full object-cover p-4"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </AnimatePresence>
                                        </div>

                                        {/* Card Content */}
                                        <div className="text-center space-y-2">
                                            <h3 className="text-white font-semibold text-lg tracking-tight">
                                                {wristband.label}
                                            </h3>
                                            <p className="text-warm-300 text-sm font-mono">
                                                {wristband.description}
                                            </p>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className={`
                                            absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                                            ${isActive ? 'opacity-100' : ''}
                                        `}>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-saffron-500/5 to-transparent" />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center gap-3 mt-12">
                        {wristbands.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className="group relative"
                                aria-label={`View ${index + 1}`}
                            >
                                <div className={`
                                    h-2 rounded-full transition-all duration-500
                                    ${index === currentIndex
                                        ? 'w-12 bg-saffron-500'
                                        : 'w-2 bg-warm-600 group-hover:bg-warm-400'
                                    }
                                `} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WristbandShowcase;

