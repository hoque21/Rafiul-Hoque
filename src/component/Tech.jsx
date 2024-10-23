import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { FaHtml5, FaGitAlt,FaPython,FaNodeJs  } from 'react-icons/fa';
import { SiJavascript,SiTailwindcss,SiJira,SiSqlite } from 'react-icons/si';
import { MdCloud } from 'react-icons/md'; 

const Tech = () => {
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

      <div className='flex flex-wrap items-center justify-center gap-8'>
         {/* Python Icon */}
        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.5, delay: 0.4 }} // Delay for staggered effect
        >
          <FaPython className='text-7xl text-clay-400' />
          <p className='mt-2 text-lg'>Python</p>
        </motion.div>
        {/* JavaScript Icon */}
        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.5, delay: 0.3 }} // Delay for staggered effect
        >
          <SiJavascript className='text-7xl text-clay-400' />
          <p className='mt-2 text-lg'>JavaScript</p>
        </motion.div>
        {/* React Icon */}
        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.5 }}
        >
          <RiReactjsLine className='text-7xl text-clay-400' />
          <p className='mt-2 text-lg'>React</p>
        </motion.div>
        {/* Node.js Icon */}
        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.5, delay: 0.6 }} // Delay for staggered effect
        >
          <FaNodeJs className='text-7xl text-clay-400' />
          <p className='mt-2 text-lg'>Node.js</p>
        </motion.div>
        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
        >
          <FaHtml5 className='text-7xl text-clay-400' />
          <p className='mt-2 text-lg'>HTML5</p>
        </motion.div>
        {/* Tailwind CSS Icon */}
        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for staggered effect
        >
          <SiTailwindcss className='text-7xl text-clay-400' />
          <p className='mt-2 text-lg'>Tailwind CSS</p>
        </motion.div>
{/* SQL Icon */}
<motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.5, delay: 0.7 }} // Delay for staggered effect
        >
          <SiSqlite className='text-7xl text-clay-400' />
          <p className='mt-2 text-lg'>SQL</p>
        </motion.div>

        {/* Git Icon */}
        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.5, delay: 0.1 }} // Delay for staggered effect
        >
          <FaGitAlt className='text-7xl text-clay-400' />
          <p className='mt-2 text-lg'>Git</p>
        </motion.div>
        <motion.div
      className='flex flex-col items-center'
      initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
      animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
      transition={{ duration: 0.5, delay: 1.0 }} // Delay for staggered effect
    >
      <MdCloud className='text-7xl text-orange-500' /> {/* Cloud icon */}
      <p className='mt-2 text-lg'>Firebase</p>
    </motion.div>
       {/* Jira Icon */}
       <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start lower and less visible
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.5, delay: 0.9 }} // Delay for staggered effect
        >
          <SiJira className='text-7xl text-clay-400' />
          <p className='mt-2 text-lg'>Jira</p>
        </motion.div>
        



        
        
      </div>
    </div>
  );
}

export default Tech;
