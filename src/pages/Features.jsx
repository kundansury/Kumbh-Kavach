import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { featuresContent } from '../data/content';

const detailedFeatures = [
    {
        title: "Real-Time Heart Rate & SpO₂ Monitoring",
        description: "The MAX30102 sensor uses reflective photoplethysmography (PPG) to continuously measure heart rate and blood oxygen saturation. Advanced signal processing algorithms filter motion artifacts and provide reliable readings even during movement.",
        sensor: "MAX30102",
        relevance: "At crowded events like Kumbh Mela, early detection of cardiac stress or hypoxia can prevent medical emergencies. Continuous monitoring ensures that abnormal patterns are caught before they escalate.",
        icon: "heart-pulse",
        specs: ["Sampling Rate: 50Hz", "Power Consumption: ~600μA", "Accuracy: ±2 BPM"]
    },
    {
        title: "Body Temperature Tracking",
        description: "The DS18B20 waterproof temperature sensor provides accurate body temperature readings using one-wire protocol. Temperature trends are monitored to detect fever onset or heat exhaustion symptoms.",
        sensor: "DS18B20",
        relevance: "In the heat of large gatherings, heat stroke and fever are significant risks. Real-time temperature monitoring enables early intervention before conditions become critical.",
        icon: "thermometer",
        specs: ["Accuracy: ±0.5°C", "Range: -55°C to +125°C", "Resolution: 12-bit"]
    },
    {
        title: "Fall & Motion Detection",
        description: "The MPU6050 6-axis IMU (accelerometer + gyroscope) detects sudden impacts, falls, and abnormal motion patterns. A configurable threshold system triggers alerts when dangerous movements are detected.",
        sensor: "MPU6050",
        relevance: "Elderly pilgrims and children are particularly vulnerable to falls in crowded conditions. Automatic fall detection ensures immediate alerts reach family members and responders.",
        icon: "activity",
        specs: ["Accelerometer: ±16g", "Gyroscope: ±2000°/s", "Sample Rate: 100Hz"]
    },
    {
        title: "Instant SOS Emergency Trigger",
        description: "A dedicated physical button provides one-press emergency activation. When triggered, the system captures the latest vital readings, timestamps the event, and initiates the emergency response protocol.",
        sensor: "Physical Button + GPIO",
        relevance: "In panic situations, complex interfaces fail. A simple physical button ensures anyone can trigger help, regardless of age or technical literacy.",
        icon: "bell-ring",
        specs: ["Debounce: Hardware + Software", "Response Time: <100ms", "Confirmation: Haptic + LED"]
    },
    {
        title: "BLE Communication Protocol",
        description: "Bluetooth Low Energy provides reliable short-range communication with the companion mobile app. Data packets are optimized for minimal bandwidth while maintaining data integrity.",
        sensor: "ESP32 Built-in BLE",
        relevance: "When cellular networks are overloaded at mass gatherings, BLE provides a reliable local communication channel that doesn't depend on infrastructure.",
        icon: "bluetooth",
        specs: ["Range: ~10 meters", "Power: Ultra-low", "Protocol: BLE 4.2"]
    },
    {
        title: "Offline-First Data Reliability",
        description: "The mobile app caches all vital data locally using Room Database. Data integrity is maintained even when connectivity is lost, with automatic synchronization when connection is restored.",
        sensor: "Room DB / SQLite",
        relevance: "Network congestion is guaranteed at large events. Offline-first architecture ensures no data loss and continuous monitoring regardless of connectivity status.",
        icon: "database",
        specs: ["Cache Duration: 72 hours", "Sync Protocol: Delta updates", "Encryption: AES-128"]
    },
    {
        title: "Energy-Efficient Wearable Design",
        description: "Optimized firmware with intelligent sleep modes and efficient sensor scheduling maximizes battery life. The system targets 8-10 hours of continuous operation on a single charge.",
        sensor: "Power Management IC",
        relevance: "Event days are long. A device that dies mid-day provides no protection. Extended battery life ensures coverage throughout the entire event duration.",
        icon: "battery-charging",
        specs: ["Target: 8-10 hours", "Battery: 250mAh LiPo", "Sleep Current: <10μA"]
    },
    {
        title: "AES-128 Data Encryption",
        description: "All transmitted data is encrypted using AES-128 CBC mode. Encryption keys are securely stored and rotated to maintain data privacy and prevent unauthorized access.",
        sensor: "ESP32 Crypto Engine",
        relevance: "Health data is sensitive personal information. Strong encryption ensures privacy protection even if communication is intercepted.",
        icon: "shield",
        specs: ["Algorithm: AES-128 CBC", "Key Storage: Secure Flash", "IV: Random per session"]
    }
];

const FeatureDetailCard = ({ feature, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 md:p-8"
        >
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron-500 to-teal-500 flex items-center justify-center text-white shadow-lg">
                        <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-navy-800 dark:text-white mb-3">
                        {feature.title}
                    </h3>

                    <p className="text-navy-700 dark:text-warm-200 mb-4 leading-relaxed">
                        {feature.description}
                    </p>

                    {/* Relevance Box */}
                    <div className="glass-inner p-4 mb-4">
                        <h4 className="font-semibold text-saffron-400 text-sm mb-2">
                            Why it matters at Kumbh Mela
                        </h4>
                        <p className="text-navy-600 dark:text-warm-100 text-sm leading-relaxed">
                            {feature.relevance}
                        </p>
                    </div>

                    {/* Specs & Sensor */}
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium border border-teal-500/40">
                                {feature.sensor}
                            </span>
                        </div>
                        {feature.specs.map((spec, i) => (
                            <span key={i} className="text-navy-600 dark:text-warm-300 text-sm">
                                {spec}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Features = () => {
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
                        {featuresContent.heading}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle mx-auto"
                    >
                        Every feature is engineered with real-world deployment in mind. Built for reliability, not demo days.
                    </motion.p>
                </div>
            </SectionWrapper>

            {/* Feature Cards */}
            <SectionWrapper>
                <div className="space-y-6">
                    {detailedFeatures.map((feature, index) => (
                        <FeatureDetailCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </SectionWrapper>

            {/* Kavach Mode Badge */}
            <SectionWrapper background="pattern">
                <div className="glass-card p-8 text-center max-w-2xl mx-auto">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-display font-bold text-2xl">🛡️</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-navy-800 dark:text-white mb-3">
                        Kavach Mode
                    </h3>
                    <p className="text-navy-700 dark:text-warm-200 mb-4">
                        Emergency features are grouped under "Kavach Mode" – a protective layer that activates when it matters most. From fall detection to SOS triggers, every emergency pathway is designed for speed and reliability.
                    </p>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Response time: Under 10 seconds
                    </span>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Features;
