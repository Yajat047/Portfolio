import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Hi, my name is';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-4"
        >
          <h3 className="text-accent text-lg md:text-xl font-mono">
            {text}
            {showCursor && <span className="animate-pulse">|</span>}
          </h3>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-textPrimary leading-tight"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-textSecondary leading-tight"
          >
            {personalInfo.title}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-4"
          >
            <div className="text-textSecondary text-base md:text-lg max-w-xl leading-relaxed space-y-2">
              {personalInfo.description.split('\n').map((line, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-accent flex-shrink-0">▹</span>
                  <span className="flex-1">{line.replace('▹ ', '')}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex gap-4 md:gap-6 pt-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-textSecondary hover:text-accent transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-textSecondary hover:text-accent transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-textSecondary hover:text-accent transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex gap-4 flex-wrap pt-6"
          >
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 rounded font-semibold inline-flex items-center gap-2"
            >
              <FaDownload /> Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-accent text-primary hover:bg-opacity-90 transition-all duration-300 rounded font-semibold"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        
        {/* Right Side - Animated Image/Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-lg"
          >
            {/* Original coding animation */}
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Coding animation"
              className="w-full h-auto rounded-lg shadow-2xl shadow-accent/20"
            />
            
            {/* Alternative coding animation */}
            {/* <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Coding animation"
              className="w-full h-auto rounded-lg shadow-2xl shadow-accent/20"
            /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
