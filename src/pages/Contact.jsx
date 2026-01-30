import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { contactContent } from '../data/content';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
    };

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
                        {contactContent.heading}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle mx-auto"
                    >
                        {contactContent.body}
                    </motion.p>
                </div>
            </SectionWrapper>

            {/* Contact Form */}
            <SectionWrapper>
                <div className="max-w-2xl mx-auto">
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card p-8 text-center"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                                <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="font-display font-bold text-2xl text-navy-800 dark:text-white mb-4">
                                Message Sent!
                            </h2>
                            <p className="text-warm-600 dark:text-warm-300 mb-6">
                                Thank you for reaching out. We'll get back to you within 2-3 business days.
                            </p>
                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    setFormData({ name: '', email: '', reason: '', message: '' });
                                }}
                                className="btn-secondary"
                            >
                                Send Another Message
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            onSubmit={handleSubmit}
                            className="glass-card p-8"
                        >
                            <div className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-navy-800 dark:text-white mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-warm-200 dark:border-navy-700 text-navy-800 dark:text-white placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                                        placeholder="Your full name"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-navy-800 dark:text-white mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-warm-200 dark:border-navy-700 text-navy-800 dark:text-white placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                {/* Reason Dropdown */}
                                <div>
                                    <label htmlFor="reason" className="block text-sm font-medium text-navy-800 dark:text-white mb-2">
                                        Reason for Contact
                                    </label>
                                    <select
                                        id="reason"
                                        name="reason"
                                        required
                                        value={formData.reason}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-warm-200 dark:border-navy-700 text-navy-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a reason...</option>
                                        {contactContent.reasons.map((reason, index) => (
                                            <option key={index} value={reason}>{reason}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-navy-800 dark:text-white mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-warm-200 dark:border-navy-700 text-navy-800 dark:text-white placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about your interest in Kumbh Kavach..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.form>
                    )}
                </div>
            </SectionWrapper>

            {/* Additional Info */}
            <SectionWrapper background="pattern">
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 text-center"
                    >
                        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-saffron-500/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-saffron-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display font-semibold text-navy-800 dark:text-white mb-2">Location</h3>
                        <p className="text-warm-600 dark:text-warm-300 text-sm">Nashik, Maharashtra, India</p>
                    </motion.div>

                    {/* Project Status */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-card p-6 text-center"
                    >
                        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-teal-500/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display font-semibold text-navy-800 dark:text-white mb-2">Status</h3>
                        <p className="text-warm-600 dark:text-warm-300 text-sm">Prototype Complete</p>
                    </motion.div>

                    {/* Response Time */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-6 text-center"
                    >
                        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-navy-500/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-navy-500 dark:text-navy-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display font-semibold text-navy-800 dark:text-white mb-2">Response Time</h3>
                        <p className="text-warm-600 dark:text-warm-300 text-sm">2-3 Business Days</p>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Contact;
