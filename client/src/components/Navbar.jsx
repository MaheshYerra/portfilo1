import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Smooth scroll for anchor tags
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '#about' },
        { name: 'Skills', path: '#skills' },
        { name: 'Education', path: '#education' },
        { name: 'Projects', path: '#projects' },
        { name: 'Achievements', path: '#achievements' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tighter">
                        <span className="text-gradient">YM</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-700 pl-4">
                            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Theme">
                                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                            </button>
                            <a href="https://github.com/MaheshYerra" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                                <FiGithub size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/mahesh2005/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                                <FiLinkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button onClick={toggleTheme} className="p-2">
                            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full glass border-t border-slate-200 dark:border-slate-800 shadow-xl"
                    >
                        <div className="flex flex-col px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-4 px-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                                <a href="https://github.com/MaheshYerra" target="_blank" rel="noreferrer"><FiGithub size={24} /></a>
                                <a href="https://www.linkedin.com/in/mahesh2005/" target="_blank" rel="noreferrer"><FiLinkedin size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
