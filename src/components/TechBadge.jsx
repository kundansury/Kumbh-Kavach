import { motion } from 'framer-motion';

const TechBadge = ({ tech, index }) => {
    // Category-based colors
    const categoryColors = {
        hardware: 'from-saffron-500/20 to-saffron-500/5 text-saffron-600 dark:text-saffron-400',
        software: 'from-teal-500/20 to-teal-500/5 text-teal-600 dark:text-teal-400',
        cloud: 'from-blue-500/20 to-blue-500/5 text-blue-600 dark:text-blue-400',
        default: 'from-navy-500/20 to-navy-500/5 text-navy-600 dark:text-navy-300',
    };

    const colorClass = categoryColors[tech.category] || categoryColors.default;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className={`glass-card p-3 sm:p-4 flex items-center gap-3 bg-gradient-to-r ${colorClass}`}
        >
            {/* Icon placeholder */}
            <div className="w-8 h-8 rounded-lg bg-white/40 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center font-bold text-sm">
                {tech.name.charAt(0)}
            </div>

            <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{tech.name}</p>
                {tech.purpose && (
                    <p className="text-xs opacity-70 truncate">{tech.purpose}</p>
                )}
            </div>
        </motion.div>
    );
};

export default TechBadge;
