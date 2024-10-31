import React, { useEffect, useState } from 'react';
import { FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll progress on window scroll
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollFraction = scrollTop / windowHeight;
    const scrollPercent = scrollFraction * 100;

    setScrollProgress(scrollPercent);
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define animation variants for menu and backdrop
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="relative flex fixed justify-between items-center py-6 px-4 bg-transparent">
      {/* Scroll Progress Bar */}
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-300 ease-in-out"
      />

      {/* Social Media Icons */}
      <div className="flex items-center gap-6 text-3xl">
        <motion.a
          href="https://github.com/hoque21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={{ scale: 1.3, rotate: 10, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9, rotate: -10, transition: { duration: 0.1 } }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="mailto:rafiulhoque21@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
          whileHover={{ scale: 1.3, rotate: 10, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9, rotate: -10, transition: { duration: 0.1 } }}
        >
          <FaEnvelope />
        </motion.a>

        <motion.a
          href="https://wa.me/8801712075433"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          whileHover={{ scale: 1.3, rotate: 10, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9, rotate: -10, transition: { duration: 0.1 } }}
        >
          <FaWhatsapp />
        </motion.a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden lg:flex gap-8 text-lg">
        <a href="/" className="hover:text-blue-500">Home</a>
        <a onClick={() => scrollToSection(refs.techRef)} className="cursor-pointer hover:text-blue-500">Skills</a>
        <a onClick={() => scrollToSection(refs.projectsRef)} className="cursor-pointer hover:text-blue-500">Projects</a>
        <a onClick={() => scrollToSection(refs.experienceRef)} className="cursor-pointer hover:text-blue-500">Experience</a>
        <a onClick={() => scrollToSection(refs.publicationRef)} className="cursor-pointer hover:text-blue-500">Publications</a>
        <a onClick={() => scrollToSection(refs.researchRef)} className="cursor-pointer hover:text-blue-500">Research Work</a>
        <a onClick={() => scrollToSection(refs.educationRef)} className="cursor-pointer hover:text-blue-500">Education</a>
        <a onClick={() => scrollToSection(refs.activitiesRef)} className="cursor-pointer hover:text-blue-500">Activities</a>
        <a onClick={() => scrollToSection(refs.awardsRef)} className="cursor-pointer hover:text-blue-500">Awards</a> {/* Add the Awards link */}
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 bg-black z-10 lg:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariants}
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 w-3/4 h-full bg-black text-white flex flex-col items-start px-8 py-10 gap-8 text-lg z-20 lg:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <a href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Home</a>
              <a onClick={() => { scrollToSection(refs.techRef); setIsOpen(false); }} className="cursor-pointer hover:text-blue-400">Skills</a>
              <a onClick={() => { scrollToSection(refs.projectsRef); setIsOpen(false); }} className="cursor-pointer hover:text-blue-400">Projects</a>
              <a onClick={() => { scrollToSection(refs.experienceRef); setIsOpen(false); }} className="cursor-pointer hover:text-blue-400">Experience</a>
              <a onClick={() => { scrollToSection(refs.publicationRef); setIsOpen(false); }} className="cursor-pointer hover:text-blue-400">Publications</a>
              <a onClick={() => { scrollToSection(refs.researchRef); setIsOpen(false); }} className="cursor-pointer hover:text-blue-400">Research Work</a>
              <a onClick={() => { scrollToSection(refs.educationRef); setIsOpen(false); }} className="cursor-pointer hover:text-blue-400">Education</a>
              <a onClick={() => { scrollToSection(refs.activitiesRef); setIsOpen(false); }} className="cursor-pointer hover:text-blue-400">Activities</a>
              <a onClick={() => { scrollToSection(refs.awardsRef); setIsOpen(false); }} className="cursor-pointer hover:text-blue-400">Awards</a> {/* Add Awards link in mobile menu */}
              
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
