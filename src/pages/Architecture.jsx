import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import { architectureContent } from '../data/content';

const workflowSteps = [
    {
        step: 1,
        title: "Initialization & Self-test",
        description: "On power-up, ESP32 performs hardware checks on all sensors, verifies BLE stack initialization, and loads configuration from flash memory.",
        code: null
    },
    {
        step: 2,
        title: "Sensor Data Acquisition",
        description: "Continuous sampling from MAX30102 (heart rate/SpO2), DS18B20 (temperature), and MPU6050 (motion). Data is buffered and filtered.",
        code: null
    },
    {
        step: 3,
        title: "Signal Processing",
        description: "Raw sensor data passes through digital filters to remove noise and motion artifacts. Vital signs are calculated using established algorithms.",
        code: null
    },
    {
        step: 4,
        title: "Data Packaging",
        description: "Processed readings are structured into a standardized packet format with timestamps and sequence numbers for transmission.",
        code: `{
  "device_id": "KK-001234",
  "timestamp": 1705847400,
  "sequence": 42,
  "vitals": {
    "heart_rate": 76,
    "spo2": 98,
    "temperature": 36.8
  },
  "motion": {
    "fall_detected": false,
    "activity_level": "normal"
  },
  "battery": 85,
  "sos_active": false
}`
    },
    {
        step: 5,
        title: "AES-128 Encryption",
        description: "Data packets are encrypted using AES-128 CBC mode before transmission. IV is regenerated for each session to ensure security.",
        code: `// Encryption Configuration
Algorithm: AES-128-CBC
Key Size: 128 bits
IV: Random per session
Block Padding: PKCS7`
    },
    {
        step: 6,
        title: "BLE Transmission",
        description: "Encrypted packets are transmitted to the paired mobile device via BLE. Acknowledgment-based protocol ensures reliable delivery.",
        code: null
    },
    {
        step: 7,
        title: "SOS Emergency Handling",
        description: "When SOS is triggered (button press or fall detection), a high-priority interrupt captures latest vitals and initiates emergency protocol.",
        code: `// SOS Packet Structure
{
  "type": "SOS_ALERT",
  "priority": "CRITICAL",
  "trigger": "BUTTON_PRESS",
  "vitals_snapshot": { ... },
  "timestamp": 1705847400,
  "location_hint": "last_known"
}`
    },
    {
        step: 8,
        title: "Mobile App Processing",
        description: "Android app receives, decrypts, and stores data. Real-time UI updates, threshold checking, and alert logic are executed client-side.",
        code: null
    }
];

const securityFeatures = [
    {
        title: "End-to-End Encryption",
        description: "All data is encrypted before leaving the wristband and only decrypted on the mobile app.",
        icon: "🔐"
    },
    {
        title: "Secure Key Storage",
        description: "Encryption keys are stored in ESP32's secure flash partition, protected from extraction.",
        icon: "🔑"
    },
    {
        title: "No Cloud Dependency",
        description: "All processing happens locally. No data is sent to external servers without explicit consent.",
        icon: "☁️"
    },
    {
        title: "Data Minimization",
        description: "Only essential health data is collected. No tracking, profiling, or unnecessary data collection.",
        icon: "📊"
    }
];

const Architecture = () => {
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
                        {architectureContent.heading}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle mx-auto"
                    >
                        {architectureContent.body}
                    </motion.p>
                </div>
            </SectionWrapper>

            {/* Architecture Diagram */}
            <SectionWrapper>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-display font-bold text-navy-800 dark:text-white mb-8 text-center">
                        System Layers
                    </h2>
                    <ArchitectureDiagram />
                </div>
            </SectionWrapper>

            {/* Workflow Steps */}
            <SectionWrapper background="pattern">
                <h2 className="section-title text-center mb-12">System Workflow</h2>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5 }}
                            className="glass-card p-6"
                        >
                            <div className="flex gap-4">
                                {/* Step Number */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {step.step}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="font-display font-semibold text-lg text-navy-800 dark:text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-warm-600 dark:text-warm-300 text-sm mb-4">
                                        {step.description}
                                    </p>

                                    {/* Code Block */}
                                    {step.code && (
                                        <div className="bg-navy-800 dark:bg-navy-900 rounded-xl p-4 overflow-x-auto">
                                            <pre className="text-sm text-navy-700 dark:text-warm-200 font-mono">
                                                {step.code}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Security Section */}
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h2 className="section-title mb-4">Security & Privacy</h2>
                    <p className="section-subtitle mx-auto">
                        Health data deserves the highest level of protection. Here's how we ensure it.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {securityFeatures.map((feature, index) => (
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

            {/* Future Ready */}
            <SectionWrapper background="gradient">
                <div className="glass-card p-8 max-w-3xl mx-auto text-center">
                    <h2 className="font-display font-bold text-2xl text-navy-800 dark:text-white mb-4">
                        Designed for Modular Upgrades
                    </h2>
                    <p className="text-warm-600 dark:text-warm-300 mb-6">
                        {architectureContent.footer}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['GPS Module', 'LoRaWAN', 'Blockchain Identity', 'ECG Sensing', 'Blood Pressure'].map((item, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-full bg-white/50 dark:bg-navy-700/50 text-navy-800 dark:text-warm-200 text-sm font-medium border border-warm-200 dark:border-navy-600"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Architecture;
