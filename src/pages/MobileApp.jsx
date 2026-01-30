import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const appScreens = [
    {
        title: "Home Dashboard",
        description: "Real-time vital signs at a glance. Large, readable numbers with color-coded status indicators.",
        features: ["Heart Rate Display", "SpO₂ Percentage", "Temperature Reading", "Battery Status", "Connection Status"],
        color: "from-teal-500 to-cyan-600"
    },
    {
        title: "Vitals History",
        description: "Interactive charts showing trends over time. Pinch to zoom, tap for details.",
        features: ["24-hour Trends", "Peak/Average Values", "Threshold Markers", "Export Options"],
        color: "from-saffron-500 to-orange-600"
    },
    {
        title: "Emergency Alert",
        description: "Full-screen alert with clear actions. One-tap to dismiss false alarms or escalate.",
        features: ["SOS Trigger Source", "Latest Vitals Snapshot", "Contact Family Button", "Dismiss/Escalate Options"],
        color: "from-red-500 to-rose-600"
    },
    {
        title: "Profile & Contacts",
        description: "Manage personal info and emergency contacts. Quick access to settings.",
        features: ["Personal Details", "Emergency Contacts (3)", "Medical Notes", "Device Settings"],
        color: "from-purple-500 to-violet-600"
    }
];

const bleFlowSteps = [
    {
        step: 1,
        title: "Device Discovery",
        description: "App scans for nearby Kumbh Kavach devices broadcasting their ID"
    },
    {
        step: 2,
        title: "Pairing Request",
        description: "User confirms pairing by pressing wristband button"
    },
    {
        step: 3,
        title: "Key Exchange",
        description: "Secure key exchange establishes encrypted channel"
    },
    {
        step: 4,
        title: "Connection Active",
        description: "Real-time data streaming begins automatically"
    },
    {
        step: 5,
        title: "Auto-Reconnect",
        description: "If disconnected, app attempts reconnection every 30 seconds"
    }
];

const offlineFeatures = [
    {
        icon: "💾",
        title: "Local Data Storage",
        description: "All vitals cached in Room Database for 72+ hours"
    },
    {
        icon: "🔄",
        title: "Delta Sync",
        description: "Only new data syncs when connection restores"
    },
    {
        icon: "⚡",
        title: "Background Processing",
        description: "Alert logic runs locally, no server required"
    },
    {
        icon: "📊",
        title: "Offline Analytics",
        description: "View trends and stats without connectivity"
    }
];

const MobileApp = () => {
    return (
        <div className="pt-24">
            {/* Hero */}
            <SectionWrapper background="gradient">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-title mb-4"
                    >
                        Companion Mobile App
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle mx-auto"
                    >
                        A clean, intuitive Android dashboard that turns sensor data into actionable insights. Built with Kotlin for reliability and performance.
                    </motion.p>
                </div>
            </SectionWrapper>

            {/* App Screens */}
            <SectionWrapper>
                <h2 className="section-title text-center mb-12">App Screens</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {appScreens.map((screen, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card overflow-hidden"
                        >
                            {/* Screen Preview */}
                            <div className={`bg-gradient-to-br ${screen.color} p-6`}>
                                <div className="bg-navy-900/90 rounded-2xl p-4 aspect-[9/16] max-h-64 flex flex-col">
                                    {/* Phone Frame */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-20 h-1.5 rounded-full bg-navy-700" />
                                    </div>

                                    {/* Screen Content Placeholder */}
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">📱</div>
                                            <p className="text-navy-600 dark:text-warm-300 text-sm">{screen.title}</p>
                                        </div>
                                    </div>

                                    {/* Navigation Bar */}
                                    <div className="flex justify-around mt-4 pt-3 border-t border-navy-700">
                                        {['🏠', '📊', '🔔', '👤'].map((icon, i) => (
                                            <span key={i} className="text-lg opacity-50">{icon}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Screen Info */}
                            <div className="p-6">
                                <h3 className="font-display font-bold text-xl text-navy-800 dark:text-white mb-2">
                                    {screen.title}
                                </h3>
                                <p className="text-warm-600 dark:text-warm-300 text-sm mb-4">
                                    {screen.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {screen.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-warm-100 dark:bg-navy-700 text-warm-700 dark:text-warm-300 text-xs"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* BLE Pairing Flow */}
            <SectionWrapper background="pattern">
                <div className="max-w-3xl mx-auto">
                    <h2 className="section-title text-center mb-4">BLE Pairing Flow</h2>
                    <p className="section-subtitle text-center mx-auto mb-12">
                        Simple one-time pairing with automatic reconnection
                    </p>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-saffron-500 to-navy-500 hidden md:block" />

                        <div className="space-y-6">
                            {bleFlowSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 md:ml-12"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0 relative md:-ml-12">
                                        {step.step}
                                    </div>
                                    <div className="glass-card p-4 flex-1">
                                        <h3 className="font-display font-semibold text-navy-800 dark:text-white mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-warm-600 dark:text-warm-300 text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Offline Caching */}
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h2 className="section-title mb-4">Offline-First Architecture</h2>
                    <p className="section-subtitle mx-auto">
                        Networks fail. Data shouldn't. Every feature works without internet.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offlineFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 text-center"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="font-display font-semibold text-navy-800 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-warm-600 dark:text-warm-300 text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Tech Stack */}
            <SectionWrapper background="gradient">
                <div className="glass-card p-8 max-w-3xl mx-auto">
                    <h3 className="font-display font-bold text-xl text-navy-800 dark:text-white mb-6 text-center">
                        Built With Modern Android Stack
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'Kotlin', desc: 'Primary Language' },
                            { name: 'Jetpack Compose', desc: 'Modern UI' },
                            { name: 'Room DB', desc: 'Local Storage' },
                            { name: 'Coroutines', desc: 'Async Operations' },
                            { name: 'BLE Library', desc: 'Connectivity' },
                            { name: 'MPAndroidChart', desc: 'Visualizations' },
                            { name: 'Hilt', desc: 'Dependency Injection' },
                            { name: 'WorkManager', desc: 'Background Tasks' }
                        ].map((tech, index) => (
                            <div key={index} className="text-center p-3 rounded-xl bg-white/50 dark:bg-navy-800/50">
                                <p className="font-semibold text-navy-800 dark:text-white text-sm">{tech.name}</p>
                                <p className="text-warm-500 dark:text-warm-400 text-xs">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default MobileApp;
