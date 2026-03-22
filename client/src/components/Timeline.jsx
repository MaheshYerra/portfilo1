import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';

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

const Timeline = () => {
    return (
        <section id="education" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Education & Achievements" subtitle />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mr-4">
                                <FiBookOpen size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
                        </div>
                        
                        <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
                            <div className="relative">
                                <div className="absolute -left-[41px] bg-white dark:bg-slate-950 p-1 rounded-full">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full ring-4 ring-blue-100 dark:ring-blue-900/30"></div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">B.Tech in Computer Science Engineering</h4>
                                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium my-2">Lovely Professional University</p>
                                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-semibold rounded-full mb-4">
                                    2023 - Present
                                </span>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Pursuing core computer science subjects including Data Structures, Algorithms, Operating Systems, and Database Management Systems.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg mr-4">
                                <FiAward size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Milestones</h3>
                        </div>
                        
                        <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
                            
                            <div className="relative">
                                <div className="absolute -left-[41px] bg-white dark:bg-slate-950 p-1 rounded-full">
                                    <div className="w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-indigo-100 dark:ring-indigo-900/30"></div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Competitive Programming</h4>
                                <p className="text-slate-600 dark:text-slate-400 mt-2">
                                    Successfully completed <strong className="text-slate-800 dark:text-slate-200">80% of the Striver DSA Sheet</strong>, demonstrating strong problem-solving skills and mastery over core data structures and algorithms.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] bg-white dark:bg-slate-950 p-1 rounded-full">
                                    <div className="w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-indigo-100 dark:ring-indigo-900/30"></div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Community & Leadership</h4>
                                <p className="text-slate-600 dark:text-slate-400 mt-2">
                                    Active Volunteer at the <strong className="text-slate-800 dark:text-slate-200">AARDIP organization</strong>, organizing events and leading initiatives to create positive social impact.
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
