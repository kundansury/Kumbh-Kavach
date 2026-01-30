import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import FeatureCard from '../components/FeatureCard';
import Timeline from '../components/Timeline';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import VitalsChart from '../components/VitalsChart';
import TechBadge from '../components/TechBadge';
import UseCaseCard from '../components/UseCaseCard';
import WristbandShowcase from '../components/WristbandShowcase';
import KumbhGallery from '../components/KumbhGallery';
import TeamSection from '../components/TeamSection';
import logo from '../assets/logo.png';
import kumbhHeroBg from '../assets/kumbh_hero.jpg';
import kumbhAerialBg from '../assets/kumbh_aerial.jpg';
import kumbhCrowdBg from '../assets/kumbh_crowd.jpg';
import {
    heroContent,
    trustStripContent,
    problemContent,
    solutionContent,
    featuresContent,
    architectureContent,
    dashboardContent,
    useCasesContent,
    techStackContent,
} from '../data/content';
import { teamMembers, teamHeading, teamFooter } from '../data/teamData';

// Floating Diya Component
const FloatingDiya = ({ delay = 0, left, size = 'sm' }) => {
    const sizes = {
        sm: 'w-2 h-2',
        md: 'w-3 h-3',
        lg: 'w-4 h-4',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
                opacity: [0, 1, 1, 0],
                y: [-20, -150, -300, -400],
                x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
            }}
            transition={{
                duration: 8,
                delay,
                repeat: Infinity,
                ease: 'easeOut',
            }}
            className="absolute pointer-events-none"
            style={{ left: `${left}%`, bottom: '10%' }}
        >
            <div className={`${sizes[size]} rounded-full bg-gradient-to-t from-saffron-500 to-yellow-300 shadow-lg shadow-saffron-500/50`} />
        </motion.div>
    );
};

// Hero Section Component with Parallax Background
const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 sm:pt-24 pb-8 overflow-hidden">
            {/* Kumbh Mela Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                    style={{ backgroundImage: `url(${kumbhHeroBg})` }}
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-warm-50/90 via-warm-50/70 to-warm-50 dark:from-navy-900/95 dark:via-navy-900/80 dark:to-navy-900" />
            </motion.div>

            {/* Floating Diyas Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                {[...Array(12)].map((_, i) => (
                    <FloatingDiya
                        key={i}
                        delay={i * 0.8}
                        left={5 + (i * 8)}
                        size={['sm', 'md', 'lg'][i % 3]}
                    />
                ))}
            </div>

            <motion.div style={{ opacity }} className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/80 dark:bg-navy-800/80 backdrop-blur-sm border border-saffron-500/30 mb-4 sm:mb-6 shadow-sm"
                        >
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 rounded-full bg-saffron-500"
                            />
                            <span className="text-saffron-600 dark:text-saffron-400 text-xs sm:text-sm font-medium">
                                Built for Kumbh Mela & Large Events
                            </span>
                        </motion.div>

                        {/* Title with animated gradient */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-3 sm:mb-4"
                        >
                            <motion.span
                                className="gradient-text inline-block"
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                style={{ backgroundSize: '200% 200%' }}
                            >
                                {heroContent.title}
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg sm:text-xl md:text-2xl text-navy-700 dark:text-warm-200 font-medium mb-3 sm:mb-4"
                        >
                            {heroContent.subtitle}
                        </motion.p>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-warm-700 dark:text-warm-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            {heroContent.tagline}
                        </motion.p>

                        {/* Highlight Tags with staggered animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8"
                        >
                            {heroContent.highlights.map((highlight, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/80 dark:bg-navy-800/80 backdrop-blur-sm border border-teal-500/30 text-teal-600 dark:text-teal-400 text-xs sm:text-sm font-medium shadow-sm cursor-default"
                                >
                                    {highlight}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                        >
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/features" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                                    {heroContent.cta.primary}
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/architecture" className="btn-outline text-center w-full sm:w-auto inline-block">
                                    {heroContent.cta.secondary}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Logo with floating animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative order-first lg:order-last"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 1, -1, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="relative"
                        >
                            {/* Glow ring behind logo */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-br from-saffron-500/30 to-teal-500/30 rounded-full blur-3xl"
                            />

                            <img
                                src={logo}
                                alt="Kumbh Kavach - Family Connectivity Wristband"
                                className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain mx-auto drop-shadow-xl"
                            />
                        </motion.div>

                        {/* Floating Stats Cards - Desktop Only */}
                        <div className="hidden lg:block">
                            {[
                                { label: 'Heart Rate', value: '76', unit: 'BPM', position: 'top-8 -left-8', delay: 0 },
                                { label: 'SpO₂', value: '98', unit: '%', position: 'top-8 -right-8', delay: 0.2 },
                                { label: 'Connection', value: 'Live', unit: '', position: 'bottom-24 -right-8', delay: 0.4, isLive: true },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 1 + stat.delay, type: 'spring' }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className={`absolute ${stat.position} px-4 py-2.5 rounded-xl bg-white/90 dark:bg-navy-800/90 backdrop-blur-sm border border-warm-100 dark:border-navy-700 shadow-lg cursor-default`}
                                >
                                    <p className="text-[10px] text-warm-400 uppercase tracking-wider">{stat.label}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-lg font-bold text-navy-800 dark:text-white">{stat.value}</span>
                                        {stat.isLive ? (
                                            <motion.span
                                                animate={{ opacity: [1, 0.5, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="w-2 h-2 rounded-full bg-teal-500"
                                            />
                                        ) : (
                                            <span className="text-xs text-warm-400">{stat.unit}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

// Trust Strip Section - CLEAN MINIMAL DESIGN (Non-Tabular)
const TrustStrip = () => {
    const icons = {
        signal: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
        heart: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
        alert: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
        users: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    };

    return (
        <section className="py-12 border-b border-warm-100 dark:border-white/5 relative z-20">
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold text-navy-800 dark:text-white mb-1">
                            {trustStripContent.headline}
                        </h2>
                        <p className="text-warm-500 dark:text-warm-400 text-xs sm:text-sm">
                            {trustStripContent.subheadline}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-end gap-6 sm:gap-10">
                        {trustStripContent.cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <div className="p-2 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400">
                                    {icons[card.icon]}
                                </div>
                                <p className="text-sm font-medium text-navy-700 dark:text-warm-200">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Problem Section with Kumbh crowd background
const ProblemSection = () => {
    return (
        <section className="relative py-16 sm:py-24 overflow-hidden">
            {/* Crowd Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5"
                    style={{ backgroundImage: `url(${kumbhCrowdBg})` }}
                />
                <div className="absolute inset-0 bg-warm-50 dark:bg-navy-900" style={{ mixBlendMode: 'overlay' }} />
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center px-2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-800 dark:text-white mb-4 sm:mb-6"
                    >
                        {problemContent.heading}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base sm:text-lg text-warm-600 dark:text-warm-300 leading-relaxed mb-6 sm:mb-8"
                    >
                        {problemContent.body}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl font-display font-semibold text-saffron-600 dark:text-saffron-400"
                    >
                        {problemContent.conclusion}
                    </motion.p>

                    {/* Animated stats counter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto"
                    >
                        {[
                            { value: '50M+', label: 'Pilgrims' },
                            { value: '1000s', label: 'Separated' },
                            { value: '< 10s', label: 'SOS Response' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="text-center"
                            >
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                                    className="block text-2xl sm:text-3xl font-bold text-saffron-600 dark:text-saffron-400"
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="text-xs sm:text-sm text-warm-500 dark:text-warm-400">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Solution Section
const SolutionSection = () => {
    const icons = {
        watch: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        smartphone: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
        shield: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    };

    return (
        <section className="relative py-16 sm:py-24 overflow-hidden">
            {/* Aerial Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-8 dark:opacity-5"
                    style={{ backgroundImage: `url(${kumbhAerialBg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-warm-50 via-warm-50/95 to-warm-50 dark:from-navy-900 dark:via-navy-900/95 dark:to-navy-900" />
            </div>

            <div className="section-container relative z-10">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="section-title mb-3 sm:mb-4">{solutionContent.heading}</h2>
                    <p className="section-subtitle mx-auto text-sm sm:text-base">{solutionContent.body}</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    {solutionContent.blocks.map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12 }}
                            whileHover={{ y: -8 }}
                            className="text-center group cursor-default"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center shadow-lg ${index === 0 ? 'bg-gradient-to-br from-saffron-500 to-saffron-600 text-white' :
                                    index === 1 ? 'bg-gradient-to-br from-teal-500 to-teal-600 text-white' :
                                        'bg-gradient-to-br from-navy-600 to-navy-700 text-white'
                                    }`}
                            >
                                {icons[block.icon]}
                            </motion.div>
                            <h3 className="font-display font-semibold text-lg sm:text-xl text-navy-800 dark:text-white mb-2">
                                {block.title}
                            </h3>
                            <p className="text-warm-500 dark:text-warm-400 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                                {block.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Features Section
const FeaturesSection = () => {
    return (
        <SectionWrapper showDivider>
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="section-title mb-4">{featuresContent.heading}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {featuresContent.features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

// Architecture Section
const ArchitectureSection = () => {
    return (
        <SectionWrapper background="gradient">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h2 className="section-title mb-3 sm:mb-4">{architectureContent.heading}</h2>
                    <p className="section-subtitle mb-6 sm:mb-8 text-sm sm:text-base">{architectureContent.body}</p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link to="/architecture" className="btn-primary inline-flex items-center gap-2">
                            View Full Architecture
                            <motion.svg
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </motion.svg>
                        </Link>
                    </motion.div>
                </div>
                <ArchitectureDiagram />
            </div>
        </SectionWrapper>
    );
};

// Dashboard Preview Section
const DashboardSection = () => {
    return (
        <SectionWrapper showDivider>
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="section-title mb-3 sm:mb-4">{dashboardContent.heading}</h2>
                <p className="section-subtitle mx-auto text-sm sm:text-base">{dashboardContent.body}</p>
            </div>

            <VitalsChart />

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center text-saffron-600 dark:text-saffron-400 font-medium mt-6 sm:mt-8 text-sm sm:text-base"
            >
                {dashboardContent.callout}
            </motion.p>
        </SectionWrapper>
    );
};

// Use Cases Section
const UseCasesSection = () => {
    return (
        <SectionWrapper background="pattern">
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="section-title mb-4">{useCasesContent.heading}</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {useCasesContent.cases.map((useCase, index) => (
                    <UseCaseCard key={index} useCase={useCase} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

// Tech Stack Section
const TechStackSection = () => {
    return (
        <SectionWrapper showDivider>
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="section-title mb-3 sm:mb-4">{techStackContent.heading}</h2>
                <p className="section-subtitle mx-auto text-sm sm:text-base">{techStackContent.body}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {techStackContent.stack.map((tech, index) => (
                    <TechBadge key={index} tech={tech} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

// Timeline Section
const TimelineSection = () => {
    return (
        <SectionWrapper>
            <Timeline />
        </SectionWrapper>
    );
};

// Main Home Component
const Home = () => {
    return (
        <div className="relative">
            <HeroSection />
            <TrustStrip />
            <KumbhGallery />
            <ProblemSection />
            <WristbandShowcase />
            <SolutionSection />
            <FeaturesSection />
            <ArchitectureSection />
            <DashboardSection />
            <UseCasesSection />
            <TechStackSection />
            <TeamSection />
            <TimelineSection />
        </div>
    );
};

export default Home;
