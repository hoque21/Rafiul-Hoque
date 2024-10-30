import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '../constants'; // Ensure this imports correctly

// Predefined color mapping for technologies
const colorMapping = {
  React: 'bg-blue-500 text-white',
  CSS: 'bg-blue-300 text-black',
  JavaScript: 'bg-yellow-500 text-black',
  HTML: 'bg-orange-500 text-white',
  Nodejs: 'bg-green-500 text-white',
  MongoDB: 'bg-green-700 text-white',
  Angular: 'bg-red-500 text-white',
  Firebase: 'bg-orange-400 text-black',
  Tailwind: 'bg-teal-400 text-white',
  // Add more technologies and colors here...
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Initial visible projects count

  const handleShowMore = () => {
    // Show 3 more projects each time, ensuring we do not exceed PROJECTS length
    setVisibleCount((prevCount) => Math.min(prevCount + 1, PROJECTS.length));
  };

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
        {PROJECTS.slice(0, visibleCount).map((project, index) => {
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

        {/* Show More Button with Animation */}
        {visibleCount < PROJECTS.length && (
          <div className="flex justify-center mt-6">
            <motion.button
              onClick={handleShowMore}
              className="bg-[#00000080] rounded-full px-4 py-2 text-sm text-white border border-[#ffffff33] transition duration-300 ease-in-out hover:bg-[#00000099] hover:text-[#ffffff] hover:border-[#ffffff]"
              initial={{ x: 100, opacity: 0 }}  // Start from right, off-screen
              animate={{ x: 0, opacity: 1, scale: [1, 1.1, 1] }}  // Slide in and pulse
              transition={{
                x: { type: "spring", stiffness: 150, damping: 8 }, // Faster slide with higher stiffness and lower damping
                opacity: { duration: 0.4 },  // Slightly quicker fade-in
                scale: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }, // Faster pulse effect
              }}
              whileHover={{ scale: 1.1 }}  // Smooth scaling on hover
              whileTap={{ scale: 0.95 }}   // Slight scale down on tap
            >
              Show More
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
