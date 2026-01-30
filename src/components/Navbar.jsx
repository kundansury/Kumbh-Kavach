import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/content';
import logo from '../assets/logo.png';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4"
        >
            <div className="section-container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group flex-shrink-0 z-10">
                        <img
                            src={logo}
                            alt="Kumbh Kavach"
                            className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                        />
                    </Link>

                    {/* Centered Navigation Pill - Desktop */}
                    <motion.nav
                        className="hidden lg:flex items-center gap-1 px-2 py-2 rounded-full bg-white/90 dark:bg-navy-900/85 backdrop-blur-xl border border-warm-200/50 dark:border-white/8 shadow-lg dark:shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.href
                                    ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-lg shadow-saffron-500/30'
                                    : 'text-navy-700 dark:text-warm-100 hover:text-navy-900 dark:hover:text-white hover:bg-warm-100/50 dark:hover:bg-white/10'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2 sm:gap-3 z-10">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2.5 rounded-full bg-warm-100 dark:bg-navy-800/70 border border-warm-200/50 dark:border-white/10 transition-all active:scale-95 hover:bg-warm-200 dark:hover:bg-navy-700"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <svg className="w-5 h-5 text-saffron-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-navy-700" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2.5 rounded-full bg-warm-100 dark:bg-navy-800/70 border border-warm-200/50 dark:border-white/10 transition-all active:scale-95 hover:bg-warm-200 dark:hover:bg-navy-700"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6 text-navy-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden mt-4 rounded-2xl overflow-hidden bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl border border-warm-200/50 dark:border-white/8 shadow-xl dark:shadow-2xl"
                        >
                            <div className="p-4 space-y-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${location.pathname === link.href
                                            ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white'
                                            : 'text-navy-700 dark:text-warm-100 hover:bg-warm-100/50 dark:hover:bg-white/10'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-3">
                                    <Link
                                        to="/contact"
                                        className="block w-full py-3 text-center rounded-xl font-semibold text-white bg-gradient-to-r from-saffron-500 to-saffron-600 shadow-lg"
                                    >
                                        Request Demo
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
