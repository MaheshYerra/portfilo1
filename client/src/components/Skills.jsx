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

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["C++", "C", "Python", "JavaScript"]
        },
        {
            title: "Frontend",
            skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Figma"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "PHP"]
        },
        {
            title: "Database & Core",
            skills: ["MongoDB", "MySQL", "DSA", "OS", "DBMS"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="py-20 md:py-32 bg-slate-100/50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Technical Arsenal" subtitle />

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div 
                            key={idx} 
                            variants={itemVariants}
                            className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center text-slate-600 dark:text-slate-300 font-medium">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
