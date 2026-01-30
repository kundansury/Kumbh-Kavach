import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import { aboutContent } from '../data/content';

const futureScope = [
    {
        title: "GPS Module Integration",
        description: "Real-time location tracking for precise positioning in large venues. Enables geofencing and location-based alerts.",
        status: "Planned",
        icon: "📍"
    },
    {
        title: "LoRaWAN Long-Range Communication",
        description: "Extend communication range beyond BLE limits. Enable mesh networking for venue-wide coverage.",
        status: "Research",
        icon: "📡"
    },
    {
        title: "Blockchain Identity System",
        description: "Decentralized identity verification for lost person identification. Tamper-proof records for authorities.",
        status: "Concept",
        icon: "🔗"
    },
    {
        title: "ECG Monitoring",
        description: "Single-lead ECG for advanced cardiac monitoring. Detect arrhythmias and heart conditions.",
        status: "Research",
        icon: "💓"
    },
    {
        title: "Blood Pressure Estimation",
        description: "Pulse transit time based BP estimation. Non-invasive continuous monitoring.",
        status: "Concept",
        icon: "🩺"
    },
    {
        title: "Multi-Language Support",
        description: "Hindi, Marathi, and regional language interfaces. Voice alerts for accessibility.",
        status: "Planned",
        icon: "🌐"
    }
];

const About = () => {
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
                        {aboutContent.heading}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle mx-auto"
                    >
                        {aboutContent.body}
                    </motion.p>
                </div>
            </SectionWrapper>

            {/* Abstract / Summary */}
            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card p-8">
                        <h2 className="font-display font-bold text-2xl text-navy-800 dark:text-white mb-4">
                            Project Abstract
                        </h2>
                        <p className="text-warm-600 dark:text-warm-300 leading-relaxed mb-6">
                            Kumbh Kavach addresses the critical challenge of family safety at large-scale gatherings like Kumbh Mela, where millions of pilgrims converge and traditional communication infrastructure becomes overwhelmed. The system integrates wearable sensor technology with mobile computing to provide continuous health monitoring, fall detection, and emergency alerting in an offline-capable package.
                        </p>
                        <p className="text-warm-600 dark:text-warm-300 leading-relaxed">
                            By combining physiological monitoring (heart rate, SpO₂, temperature) with motion sensing and BLE communication, Kumbh Kavach creates a protective ecosystem that keeps families connected even when networks fail. The prototype demonstrates feasibility of low-cost, scalable safety wearables for mass events.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Problem / Outcome / Future */}
            <SectionWrapper background="pattern">
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {aboutContent.blocks.map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="glass-card p-6"
                        >
                            <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white font-bold ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-teal-500' : 'bg-saffron-500'
                                }`}>
                                {index === 0 ? '❗' : index === 1 ? '✓' : '🚀'}
                            </div>
                            <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white mb-3">
                                {block.title}
                            </h3>
                            <p className="text-warm-600 dark:text-warm-300 text-sm leading-relaxed">
                                {block.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Motivation */}
            <SectionWrapper>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="section-title mb-6">Why We Built This</h2>
                    <div className="glass-card p-8">
                        <p className="text-warm-600 dark:text-warm-300 leading-relaxed mb-4">
                            Every year, Kumbh Mela witnesses cases of separated families, lost elderly, and medical emergencies delayed by crowd density and network congestion. While technology has advanced tremendously, the solutions available for mass gathering safety remain limited and expensive.
                        </p>
                        <p className="text-warm-600 dark:text-warm-300 leading-relaxed mb-4">
                            We believed a different approach was possible: a low-cost, locally-manufactured wearable that doesn't depend on cellular infrastructure. One that puts family connectivity and emergency response at the center of its design.
                        </p>
                        <p className="text-saffron-600 dark:text-saffron-400 font-semibold">
                            Kumbh Kavach is our attempt to make safety technology accessible to every pilgrim.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Future Scope */}
            <SectionWrapper background="gradient">
                <div className="text-center mb-12">
                    <h2 className="section-title mb-4">Future Scope</h2>
                    <p className="section-subtitle mx-auto">
                        The prototype is just the beginning. Here's our roadmap for making Kumbh Kavach deployment-ready.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {futureScope.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">{item.icon}</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-display font-semibold text-navy-800 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${item.status === 'Planned' ? 'bg-teal-500/20 text-teal-600 dark:text-teal-400' :
                                                item.status === 'Research' ? 'bg-saffron-500/20 text-saffron-600 dark:text-saffron-400' :
                                                    'bg-purple-500/20 text-purple-600 dark:text-purple-400'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-warm-600 dark:text-warm-300 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Call to Action */}
            <SectionWrapper>
                <div className="glass-card p-8 max-w-2xl mx-auto text-center">
                    <h2 className="font-display font-bold text-2xl text-navy-800 dark:text-white mb-4">
                        Interested in Collaborating?
                    </h2>
                    <p className="text-warm-600 dark:text-warm-300 mb-6">
                        We're looking for partners to help bring Kumbh Kavach to deployment. Whether you're an event organizer, research institution, or technology partner, we'd love to connect.
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                        Get in Touch
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
