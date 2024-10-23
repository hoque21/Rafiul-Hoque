import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '../constants';

// Predefined color mapping for technologies
const colorMapping = {
  React: 'bg-blue-500 text-white',
  CSS: 'bg-blue-300 text-black',
  JavaScript: 'bg-yellow-500 text-black',
  HTML: 'bg-orange-500 text-white',
  Nodejs: 'bg-green-500 text-white',
  MongoDB: 'bg-green-700 text-white',
  // Add more technologies and colors here...
};

const Projects = () => {
  return (
    <div className='pb-4'>
      {/* Animated Section Title */}
      <motion.h2
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Projects Container */}
      <div className='flex flex-col items-center'>
        {PROJECTS.map((project, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

          return (
            <motion.div
              ref={ref} // Attach ref for in-view detection
              key={index}
              className='mb-8 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left lg:justify-start w-full max-w-5xl p-6 border border-gray-200 shadow-lg rounded-lg'
              initial={{ opacity: 0, scale: 0.9, y: 50 }} // Start hidden and down
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }} // Animate based on scroll
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect for each item
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Scale up slightly when hovered
            >
              {/* Project Image */}
              <div className='w-full lg:w-1/4 mb-4 lg:mb-0'>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className='w-64 h-64 object-cover rounded'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                />
              </div>

              {/* Project Info */}
              <div className='w-full lg:w-3/4 lg:pl-6'>
                {/* Project Title */}
                <motion.h3
                  className='text-2xl font-bold mb-2'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </motion.h3>

                {/* Project Description */}
                <motion.p
                  className='mb-4 text-lg'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  {project.description}
                </motion.p>

                {/* Project Technologies */}
                <motion.div
                  className='flex flex-wrap justify-center lg:justify-start'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.6 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className={`mr-2 mb-2 px-2 py-1 rounded ${colorMapping[tech] || 'bg-gray-200 text-black'}`}
                      whileHover={{ scale: 1.1, rotate: 5 }} // Slight scaling and rotation on hover
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          );
        })}

        <motion.p
          className='text-4xl font-bold text-white'
          initial={{ opacity: 0, y: -20 }} // Start hidden and slightly above
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.8, ease: 'easeInOut' }} // Duration and easing
        >
          Coming Soon
        </motion.p>
      </div>
    </div>
  );
};

export default Projects;
