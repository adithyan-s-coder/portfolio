import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const titleText = "ADITHYAN S";

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide">
        
        {/* --- BACKGROUND EFFECTS --- */}
        {/* Subtle grid lines */}
        <div className="portfolio-ui absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Profile Image as Hero Graphic */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 right-0 w-full md:w-[60%] h-full z-10 pointer-events-none"
            style={{ 
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)', 
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)' 
            }}
        >
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover object-center grayscale" />
        </motion.div>

        {/* Center Subdued Blue Glow */}
        <div className="portfolio-ui center-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-100 mix-blend-screen z-[1]"></div>

        {/* --- HUD ELEMENTS --- */}
        <div className="portfolio-ui absolute bottom-12 right-8 md:bottom-12 md:right-12 z-[60] font-mono text-[8px] sm:text-[10px] text-gray-600 tracking-widest text-right flex flex-col space-y-1.5 pointer-events-none hidden sm:flex">
            <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}}>SECURE SYS_ID: REACT_GSAP</motion.span>
            <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.3}}>COORD: 34.0522 N / 118.2437 W</motion.span>
        </div>

        {/* --- SOCIAL LINKS --- */}
        <div className="portfolio-ui absolute bottom-12 left-8 md:left-12 z-[60] flex flex-col space-y-5">
            <motion.a initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:1.5}} href="https://github.com/adithyan-s-coder" target="_blank" rel="noreferrer" className="social-icon text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                {/* GitHub */}
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </motion.a>
            <motion.a initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:1.7}} href="https://www.linkedin.com/in/adithyan-s-a30165376/" target="_blank" rel="noreferrer" className="social-icon text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                {/* LinkedIn */}
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </motion.a>
        </div>

        {/* --- PORTFOLIO TEXT OVERLAY --- */}
        <AnimatePresence>
            <div className="portfolio-ui absolute inset-0 z-[50] pointer-events-none flex flex-col justify-center items-center md:items-start px-8 md:px-[8%] lg:px-[10%] pt-32 pb-16 md:pt-0 pb-0">
                
                {/* LEFT SIDE: All Content */}
                <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-0">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="mb-4"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-[0.1em] uppercase leading-none" style={{ textShadow: "0 0 20px rgba(255,255,255,0.2)" }}>
                            {titleText}
                        </h1>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                        className="relative inline-block mb-10"
                    >
                        <h2 className="text-sm md:text-md lg:text-lg font-mono text-gray-300 tracking-[0.2em] uppercase pb-2">
                            Full Stack Developer
                        </h2>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/60"></div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                        className="mb-8"
                    >
                        <p className="text-gray-400 text-sm md:text-sm lg:text-base font-light tracking-wide leading-relaxed bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-white/5 md:pr-10">
                            Passionate about building responsive and user-friendly web applications using modern web technologies.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
                        className="pointer-events-auto"
                    >
                        <a href="#projects" className="inline-flex items-center px-8 py-3 border border-gray-700 bg-black/50 hover:bg-black/80 hover:border-blue-500/50 transition-colors cursor-pointer rounded-sm backdrop-blur-md group">
                            <span className="text-gray-300 font-mono tracking-widest uppercase text-xs group-hover:text-white transition-colors">Explore Work</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    </div>
  );
}
