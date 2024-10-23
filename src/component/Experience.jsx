import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion for animations
import { EXPERIENCES } from '../constants'; // Assuming EXPERIENCES contains the data

const Experience = () => {
  const sectionRef = useRef(null); // Reference to the Experience section
  const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 }); // Detect if section is in view

  return (
    <div ref={sectionRef} className='pb-4'>
      {/* Animated Section Title */}
      <motion.h2
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on scroll
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {/* Experience List */}
      <div className='flex flex-col items-center'>
        {EXPERIENCES.map((experience, index) => {
          const ref = useRef(null); // Create a ref for each experience item
          const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); // Detect if this experience is in view

          return (
            <motion.div
              ref={ref} // Attach ref for in-view detection
              key={index}
              className='mb-8 flex flex-col lg:flex-row w-full max-w-5xl p-6 border border-gray-200 shadow-lg rounded-lg'
              initial={{ opacity: 0, scale: 0.9, y: 30 }} // Start hidden and down
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }} // Animate based on scroll
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect for each item
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Animation when hovered
            >
              {/* Year */}
              <div className='w-full lg:w-1/4 mb-4 lg:mb-0'>
                <motion.p
                  className='text-sm text-stone-400'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Animate based on scroll
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {experience.year}
                </motion.p>
              </div>

              {/* Experience Details */}
              <div className='w-full lg:w-3/4 lg:pl-6'>
                {/* Role & Company */}
                <motion.h3
                  className='text-2xl font-bold mb-2'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Animate based on scroll
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  {experience.role} - <span className='text-xl text-stone-500'>{experience.company}</span>
                </motion.h3>

                {/* Description */}
                <motion.p
                  className='mb-4 text-lg'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Animate based on scroll
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  {experience.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className='flex flex-wrap'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Animate based on scroll
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className='mr-2 mb-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded'
                      whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect on technologies
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
