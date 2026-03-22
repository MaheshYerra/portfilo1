import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

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
const fallbackProjects = [
    {
        _id: '1',
        title: 'Hospital Management System',
        description: '- Developed a full-stack system to manage patients, doctors, appointments, billing, and reports.\n- Automated scheduling and communication.',
        techStack: ['PHP', 'MySQL', 'HTML', 'Tailwind CSS', 'JavaScript'],
        githubLink: 'https://github.com/MaheshYerra/HOSPTIAL-MANAGAMENT-SYSTEM',
        projectUrl: '#',
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000'
    },
    {
        _id: '2',
        title: 'Farmer Portal',
        description: '- Platform providing crop prices, weather updates, and government schemes.\n- Enabled direct selling for farmers to reduce middlemen.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        githubLink: 'https://github.com/MaheshYerra/farmer-protal',
        projectUrl: '#',
        imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop'
    }
];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Adjust port/url as necessary
                const { data } = await axios.get('http://localhost:5000/api/projects');
                if (data && data.length > 0) {
                    setProjects(data);
                } else {
                    setProjects(fallbackProjects);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects", error);
                
                // Fallback Sample Projects to match requirements until Admin seeds DB
                setProjects(fallbackProjects);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-32">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <section id="projects" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Selected Works" subtitle />

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {projects.map((project) => (
                        <motion.div 
                            key={project._id} 
                            variants={itemVariants}
                            className="group glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                <img 
                                    src={project.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000'} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                
                                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    {project.githubLink && (
                                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-blue-600 rounded-full text-white transition-colors">
                                            <FiGithub size={24} />
                                        </a>
                                    )}
                                    {project.projectUrl && (
                                        <a href={project.projectUrl} target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-blue-600 rounded-full text-white transition-colors">
                                            <FiExternalLink size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow whitespace-pre-wrap">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                                    {project.techStack && project.techStack.map((tech, idx) => (
                                        <span key={idx} className="text-xs font-semibold px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
