import { motion } from 'framer-motion';

const UseCaseCard = ({ useCase, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-card p-4 sm:p-5 text-center group"
        >
            {/* Icon - Glass background */}
            <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
            >
                {useCase.icon}
            </motion.div>

            {/* Title */}
            <h3 className="font-display font-semibold text-sm sm:text-base text-navy-800 dark:text-white">
                {useCase.title}
            </h3>
        </motion.div>
    );
};

export default UseCaseCard;
