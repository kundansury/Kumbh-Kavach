import { motion } from 'framer-motion';

const TeamCard = ({ member, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card p-5 sm:p-6 text-center group"
        >
            {/* Avatar - Glass ring effect */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-18 h-18 sm:w-20 sm:h-20 mx-auto mb-4"
            >
                <div
                    className="w-full h-full rounded-full flex items-center justify-center text-white font-display font-bold text-xl sm:text-2xl shadow-lg"
                    style={{ backgroundColor: member.color || '#FF6B35' }}
                >
                    {member.initials}
                </div>
                {/* Glass ring on hover */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Name */}
            <h3 className="font-display font-semibold text-base sm:text-lg text-navy-800 dark:text-white mb-1">
                {member.name}
            </h3>

            {/* Role */}
            <p className="text-saffron-600 dark:text-saffron-400 text-xs sm:text-sm font-medium mb-2">
                {member.role}
            </p>

            {/* Description */}
            <p className="text-warm-400 dark:text-warm-500 text-xs leading-relaxed">
                {member.description}
            </p>
        </motion.div>
    );
};

export default TeamCard;
