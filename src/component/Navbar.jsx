// Navbar.js
import React, { useState } from 'react';
import { FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 px-4 bg-transparent">
      {/* Social Media Icons */}
      <div className="flex items-center gap-6 text-3xl">
        <a
          href='https://github.com/hoque21'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>
        <a
          href='mailto:rafiulhoque21@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Gmail'
        >
          <FaEnvelope />
        </a>
        <a
          href='https://wa.me/8801712075433'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='WhatsApp'
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl focus:outline-none" aria-label="Toggle Menu">
          {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`flex-col lg:flex lg:flex-row lg:items-center lg:gap-8 text-lg ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
        <a href="/" className="hover:text-blue-500">Home</a>
        <a onClick={() => scrollToSection(refs.techRef)} className="cursor-pointer hover:text-blue-500">Skills</a>
        <a onClick={() => scrollToSection(refs.projectsRef)} className="cursor-pointer hover:text-blue-500">Projects</a>
        <a onClick={() => scrollToSection(refs.experienceRef)} className="cursor-pointer hover:text-blue-500">Experience</a>
        <a onClick={() => scrollToSection(refs.publicationRef)} className="cursor-pointer hover:text-blue-500">Publications</a>
        <a onClick={() => scrollToSection(refs.researchRef)} className="cursor-pointer hover:text-blue-500">Research Work</a>
        <a onClick={() => scrollToSection(refs.educationRef)} className="cursor-pointer hover:text-blue-500">Education</a>
        <a onClick={() => scrollToSection(refs.activitiesRef)} className="cursor-pointer hover:text-blue-500">Activities</a> {/* New link */}
      </div>
    </nav>
  );
};

export default Navbar;
