import React from 'react';
import { motion } from 'framer-motion';

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

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="About Me" subtitle />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden glass border-4 border-white/40 dark:border-white/10 shadow-xl relative z-10">
                            {/* In a real scenario, place a professional photo here */}
                            <div className="w-full h-full bg-white dark:bg-[#0f172a] flex items-center justify-center">
                                <img src="/profile.jpg" alt="Yerra Mahesh" className="w-full h-full object-contain" />
                            </div>
                        </div>
                        {/* Decorative background block */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600/20 dark:bg-blue-500/20 rounded-2xl -z-10 blur-sm"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 text-lg text-slate-600 dark:text-slate-300"
                    >
                        <p>
                            Hello! I'm Yerra Mahesh, a dedicated Computer Science Engineering student at Lovely Professional University (2023–Present). I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                        </p>
                        <p>
                            My interest in web development started with a curiosity about how things work on the internet. Fast-forward to today, and I am passionately building full-stack applications using the MERN stack—bringing a blend of frontend finesse and backend robustness.
                        </p>
                        <p>
                            When I'm not writing code or debugging, I'm often focusing on algorithmic challenges—I've completed over 80% of the Striver DSA Sheet. I also believe in giving back to the community and actively volunteer at the AARDIP organization.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6 pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-3xl mb-1">80%</h4>
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Striver DSA</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-3xl mb-1">Active</h4>
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Volunteer</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
