import { motion } from 'framer-motion';
import { timelineContent } from '../data/content';

const Timeline = () => {
    const { phases, heading, note } = timelineContent;

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="section-title mb-4">{heading}</h2>
                <p className="section-subtitle mx-auto">{note}</p>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Center Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron-500 via-teal-500 to-navy-500 transform md:-translate-x-1/2" />

                {/* Timeline Items */}
                <div className="space-y-8">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Content Card */}
                            <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                                <div className="glass-card p-4 inline-block">
                                    <div className="flex items-center gap-3">
                                        {phase.status === 'complete' ? (
                                            <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-saffron-500/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                                                <div className="w-3 h-3 rounded-full bg-saffron-500" />
                                            </div>
                                        )}
                                        <span className="font-display font-semibold text-navy-800 dark:text-white">
                                            {phase.name}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-navy-800 border-4 border-saffron-500 transform -translate-x-1/2 z-10" />

                            {/* Spacer for opposite side */}
                            <div className="hidden md:block md:w-5/12" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
