import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { footerContent, shortTaglines } from '../data/content';
import logo from '../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-navy-800 dark:bg-navy-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="mandala-pattern w-full h-full" />
            </div>

            <div className="section-container relative">
                {/* Main Footer Content */}
                <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="sm:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <img
                                src={logo}
                                alt="Kumbh Kavach"
                                className="h-16 sm:h-20 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-warm-300 text-sm sm:text-base mb-4 max-w-sm leading-relaxed">
                            {footerContent.description}
                        </p>
                        <p className="text-saffron-400 font-medium text-sm italic">
                            "{shortTaglines[0]}"
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerContent.links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-warm-300 hover:text-saffron-400 transition-colors text-sm sm:text-base inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Project Info */}
                    <div>
                        <h4 className="font-display font-semibold text-lg mb-4">Project</h4>
                        <ul className="space-y-3 text-sm sm:text-base text-warm-300">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                Nashik, Maharashtra
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                Prototype Ready
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                Open for Collaboration
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mandala Divider */}
                <div className="mandala-divider opacity-30" />

                {/* Bottom Bar */}
                <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-warm-400 text-xs sm:text-sm text-center sm:text-left">
                        © {currentYear} Kumbh Kavach. Made for safer public gatherings.
                    </p>
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-navy-700 hover:bg-navy-600 flex items-center justify-center transition-colors"
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
