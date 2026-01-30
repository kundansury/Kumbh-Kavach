import { motion } from 'framer-motion';
import { architectureContent } from '../data/content';

const layerColors = {
    teal: {
        bg: 'bg-teal-500/10 dark:bg-teal-500/20',
        border: 'border-teal-500/30',
        text: 'text-teal-600 dark:text-teal-400',
        dot: 'bg-teal-500',
    },
    saffron: {
        bg: 'bg-saffron-500/10 dark:bg-saffron-500/20',
        border: 'border-saffron-500/30',
        text: 'text-saffron-600 dark:text-saffron-400',
        dot: 'bg-saffron-500',
    },
    navy: {
        bg: 'bg-navy-500/10 dark:bg-navy-500/20',
        border: 'border-navy-300/30 dark:border-navy-500/30',
        text: 'text-navy-600 dark:text-navy-300',
        dot: 'bg-navy-500',
    },
};

const ArchitectureDiagram = ({ variant = 'default' }) => {
    const { layers, footer } = architectureContent;

    return (
        <div className="relative">
            {/* Connection Lines */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/50 via-saffron-500/50 to-navy-500/50 transform -translate-x-1/2 hidden md:block" />

            {/* Layers */}
            <div className="space-y-4">
                {layers.map((layer, index) => {
                    const colors = layerColors[layer.color] || layerColors.teal;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className={`${colors.bg} ${colors.border} border rounded-2xl p-5 backdrop-blur-sm hover:scale-[1.02] transition-transform`}>
                                <div className="flex items-center gap-4">
                                    {/* Layer Number */}
                                    <div className={`w-10 h-10 rounded-xl ${colors.dot} flex items-center justify-center text-white font-bold shadow-lg`}>
                                        {index + 1}
                                    </div>

                                    {/* Layer Info */}
                                    <div className="flex-1">
                                        <h4 className={`font-display font-semibold ${colors.text}`}>
                                            {layer.name}
                                        </h4>
                                        <p className="text-warm-600 dark:text-warm-300 text-sm">
                                            {layer.tech}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    {index < layers.length - 1 && (
                                        <div className="hidden md:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                                            <svg className="w-6 h-6 text-warm-400 dark:text-warm-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 16l-6-6h12z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Footer Note */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center text-warm-500 dark:text-warm-400 text-sm mt-8 italic"
            >
                {footer}
            </motion.p>
        </div>
    );
};

export default ArchitectureDiagram;
