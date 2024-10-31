import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { FaHtml5, FaGitAlt, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiJira, SiSqlite } from 'react-icons/si';
import { MdCloud, MdOutlineApi } from 'react-icons/md'; // Import the API icon for Postman
import { GiBrain } from 'react-icons/gi'; // Brain icon for NLP
import { BiCamera } from 'react-icons/bi'; // Camera icon for Computer Vision

const Tech = () => {
  const techStackLine1 = [
    { icon: <FaPython className='text-7xl text-clay-400' />, label: 'Python' },
    { icon: <GiBrain className='text-7xl text-clay-400' />, label: 'NLP' },
    { icon: <BiCamera className='text-7xl text-clay-400' />, label: 'Computer Vision' },
    { icon: <SiJavascript className='text-7xl text-clay-400' />, label: 'JavaScript' },
    { icon: <RiReactjsLine className='text-7xl text-clay-400' />, label: 'React' },
    { icon: <FaNodeJs className='text-7xl text-clay-400' />, label: 'Node.js' },
    { icon: <FaHtml5 className='text-7xl text-clay-400' />, label: 'HTML5' },
  ];

  const techStackLine2 = [
    { icon: <SiTailwindcss className='text-7xl text-clay-400' />, label: 'Tailwind CSS' },
    { icon: <SiSqlite className='text-7xl text-clay-400' />, label: 'SQL' },
    { icon: <FaGitAlt className='text-7xl text-clay-400' />, label: 'Git' },
    { icon: <MdCloud className='text-7xl text-orange-500' />, label: 'Firebase' },
    { icon: <SiJira className='text-7xl text-clay-400' />, label: 'Jira' },
    { icon: <MdOutlineApi className='text-7xl text-clay-400' />, label: 'Postman' }, // Add Postman here
  ];

  return (
    <div className='pb-20'>
      {/* Animated Header */}
      <motion.h2
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -20 }} // Start off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Fade in and move to position
        transition={{ duration: 0.5 }} // Animation duration
      >
        Technologies
      </motion.h2>

      {/* First Line of Tech Icons */}
      <div className='flex flex-wrap items-center justify-center gap-8 mb-10'>
        {techStackLine1.map((tech, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center'
            initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
            animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
          >
            {tech.icon}
            <p className='mt-2 text-lg'>{tech.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Second Line of Tech Icons */}
      <div className='flex flex-wrap items-center justify-center gap-8 mb-10'>
        {techStackLine2.map((tech, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center'
            initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
            animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }} // Staggered effect with additional delay
          >
            {tech.icon}
            <p className='mt-2 text-lg'>{tech.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Third Line of Tech Icons */}
     
    </div>
  );
};

export default Tech;
