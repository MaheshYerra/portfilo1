import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const SectionHeading = ({ title, subtitle }) => (
    <div className="mb-12 md:mb-20 text-center">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
        >
            {title}
        </motion.h2>
        {subtitle && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            />
        )}
    </div>
);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        
        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setErrorMsg(error.response?.data?.message || 'Something went wrong. Please try again.');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 relative">
            <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-950/10 skew-y-3 transform origin-top-left -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Get In Touch" subtitle />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Let's talk about your project</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                I'm currently open for new opportunities or freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <FiMail size={24} />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Email Me</h4>
                                    <a href="mailto:yerramahesh1234@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        yerramahesh1234@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                        <FiMapPin size={24} />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Location</h4>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Lovely Professional University, Punjab
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-8 md:p-10 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={status === 'loading' || status === 'success'}
                                className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all flex items-center justify-center space-x-2
                                    ${status === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 shadow-lg shadow-blue-500/30'}`}
                            >
                                {status === 'loading' ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                                ) : status === 'success' ? (
                                    <>
                                        <FiCheckCircle size={20} />
                                        <span>Message Sent!</span>
                                    </>
                                ) : (
                                    <>
                                        <FiSend size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                            
                            {status === 'error' && (
                                <p className="text-red-500 text-sm text-center mt-2">{errorMsg}</p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
