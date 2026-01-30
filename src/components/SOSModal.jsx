import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SOSModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            title: 'Emergency Detected',
            description: 'SOS button pressed or fall detected',
            icon: '🚨',
            color: 'bg-red-500',
        },
        {
            title: 'Data Captured',
            description: 'Latest vitals packaged with timestamp',
            icon: '📊',
            color: 'bg-saffron-500',
        },
        {
            title: 'Alert Transmitted',
            description: 'BLE packet sent to connected device',
            icon: '📡',
            color: 'bg-teal-500',
        },
        {
            title: 'Contacts Notified',
            description: 'Emergency contacts receive alert',
            icon: '👨‍👩‍👧',
            color: 'bg-navy-500',
        },
        {
            title: 'Response Initiated',
            description: 'Help is on the way',
            icon: '✅',
            color: 'bg-green-500',
        },
    ];

    const startDemo = () => {
        setIsOpen(true);
        setCurrentStep(0);

        // Auto-progress through steps
        let step = 0;
        const interval = setInterval(() => {
            step++;
            if (step < steps.length) {
                setCurrentStep(step);
            } else {
                clearInterval(interval);
            }
        }, 1500);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentStep(0);
    };

    return (
        <>
            {/* Floating SOS Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={startDemo}
                className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 flex items-center justify-center group"
            >
                <span className="font-bold text-sm">SOS</span>
                <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30" />

                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-navy-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    View SOS Demo
                </span>
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md"
                        >
                            <div className="glass-card p-6 m-4">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                                            <span className="text-xl">🛡️</span>
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-navy-800 dark:text-white">
                                                Kavach Mode
                                            </h3>
                                            <p className="text-warm-500 dark:text-warm-400 text-xs">Emergency Response Flow</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="w-8 h-8 rounded-full hover:bg-warm-100 dark:hover:bg-navy-700 flex items-center justify-center transition-colors"
                                    >
                                        <svg className="w-5 h-5 text-warm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Steps */}
                                <div className="space-y-3">
                                    {steps.map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{
                                                opacity: index <= currentStep ? 1 : 0.3,
                                                x: 0,
                                            }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                            className={`flex items-center gap-4 p-3 rounded-xl transition-all ${index === currentStep
                                                    ? 'bg-gradient-to-r from-saffron-500/10 to-teal-500/10 border border-saffron-500/20'
                                                    : 'bg-warm-50 dark:bg-navy-800/50'
                                                }`}
                                        >
                                            {/* Step Indicator */}
                                            <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center text-lg shadow-lg ${index <= currentStep ? 'opacity-100' : 'opacity-50'
                                                }`}>
                                                {index < currentStep ? '✓' : step.icon}
                                            </div>

                                            {/* Step Content */}
                                            <div className="flex-1">
                                                <h4 className={`font-semibold text-sm ${index <= currentStep ? 'text-navy-800 dark:text-white' : 'text-warm-400'
                                                    }`}>
                                                    {step.title}
                                                </h4>
                                                <p className={`text-xs ${index <= currentStep ? 'text-warm-600 dark:text-warm-300' : 'text-warm-400'
                                                    }`}>
                                                    {step.description}
                                                </p>
                                            </div>

                                            {/* Status */}
                                            {index < currentStep && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center"
                                                >
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </motion.div>
                                            )}
                                            {index === currentStep && (
                                                <div className="w-6 h-6 rounded-full border-2 border-saffron-500 border-t-transparent animate-spin" />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="mt-6 pt-4 border-t border-warm-200 dark:border-navy-700">
                                    <p className="text-center text-warm-500 dark:text-warm-400 text-xs">
                                        Response time: <span className="text-saffron-500 font-medium">Under 10 seconds</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default SOSModal;
