import { motion } from 'framer-motion';
import { teamMembers, teamHeading, teamSubtitle } from '../data/team';

const TeamSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-warm-50/50 via-white to-warm-50/50 dark:from-navy-900/50 dark:via-navy-950 dark:to-navy-900/50 z-0" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron-500/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron-500/20 to-transparent" />

            <div className="section-container relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-800 dark:text-white mb-6"
                    >
                        {teamHeading}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-warm-600 dark:text-warm-300 leading-relaxed"
                    >
                        {teamSubtitle}
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white/40 dark:bg-navy-800/40 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-saffron-500/10 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/5] overflow-hidden relative bg-warm-100 dark:bg-navy-900">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        // Fallback if image fails to load
                                        e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=random';
                                    }}
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                <div className="flex justify-between items-start gap-4 mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-900 dark:text-white group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm font-medium text-saffron-600 dark:text-saffron-400 mt-1">
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* LinkedIn Button */}
                                    <a
                                        href={member.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-navy-50 dark:bg-navy-700/50 text-navy-600 dark:text-warm-200 hover:bg-science-blue-600 hover:text-white transition-all duration-300 flex-shrink-0"
                                        aria-label={`${member.name}'s LinkedIn`}
                                    >
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>

                                <p className="text-sm text-warm-600 dark:text-warm-300 leading-relaxed border-t border-warm-200/50 dark:border-white/10 pt-4 mt-2">
                                    {member.contribution}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
