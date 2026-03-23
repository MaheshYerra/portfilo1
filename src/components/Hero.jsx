import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      
      {/* Background Blobs for specific styling */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
              Hello, I am
            </span>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
              Yerra Mahesh<span className="text-blue-600 dark:text-blue-400">.</span>
            </h1>

            <div className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 h-16">
              <TypeAnimation
                sequence={[
                  'Computer Science Student.',
                  2000,
                  'Full Stack Developer.',
                  2000,
                  'MERN Stack Enthusiast.',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              I specialize in building and occasionally designing exceptional digital experiences. Currently focused on building accessible, human-centered products utilizing the MERN stack.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1">
                View My Work
                <FiArrowRight className="ml-2" />
              </a>
              
              <a href="/Maheshcv upd.pdf" download className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-full text-slate-700 dark:text-slate-200 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                Download Resume
                <FiDownload className="ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Visual Side */} 
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[2rem] transform rotate-6 opacity-20 dark:opacity-40 animate-pulse"></div>
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-[2rem] shadow-2xl overflow-hidden glass border-2 border-white/20 dark:border-white/10 flex items-center justify-center">
                    <img src="/hero-image.png" alt="Creative Tech Illustration" className="w-full h-full object-cover rounded-[2rem]" />
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
