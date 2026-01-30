import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Gradient Orbs */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-saffron-500/10 to-orange-500/5 blur-3xl"
            />
            <motion.div
                animate={{
                    x: [0, -20, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/5 blur-3xl"
            />
            <motion.div
                animate={{
                    x: [0, 15, 0],
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-navy-500/5 to-blue-500/5 blur-3xl"
            />

            {/* Wave Lines */}
            <svg
                className="absolute bottom-0 left-0 right-0 w-full h-40 opacity-30 dark:opacity-20"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <motion.path
                    animate={{
                        d: [
                            'M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
                            'M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
                            'M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
                        ],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    fill="url(#wave-gradient)"
                    fillOpacity="0.1"
                />
                <defs>
                    <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF6B35" />
                        <stop offset="50%" stopColor="#14B8A6" />
                        <stop offset="100%" stopColor="#1E3A5F" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeInOut',
                    }}
                    className="absolute w-2 h-2 rounded-full bg-saffron-500/30"
                    style={{
                        left: `${10 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                />
            ))}

            {/* Mandala Pattern Overlay */}
            <div className="absolute inset-0 mandala-pattern opacity-30 dark:opacity-10" />
        </div>
    );
};

export default BackgroundEffects;
