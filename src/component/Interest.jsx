import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion for animations

// Define interests with titles and descriptions
const INTERESTS = [
  { title: 'Computer Vision', description: 'Exploring techniques for enabling computers to interpret visual information.' },
  { title: 'Natural Language Processing', description: 'Working on the interaction between computers and humans through language.' },
  { title: 'Data Science', description: 'Analyzing and interpreting complex data to aid decision-making.' },
  // Add more interests as needed
];

const Interests = () => {
  const sectionRef = useRef(null); // Reference to the Interests section
  const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 }); // Detect if section is in view

  return (
    <div ref={sectionRef} className='pb-4'> {/* Add padding for spacing */}
      {/* Animated Section Title */}
      <motion.h2
        className='my-20 text-center font-semibold text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on scroll
        transition={{ duration: 0.6 }}
      >
        Interest
      </motion.h2>

      {/* Centered Container for Interests List */}
      <div className='max-w-5xl mx-auto px-4'> {/* Adjust max width */}
        {/* Interests List as a Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'> {/* Use grid for layout */}
          {INTERESTS.map((interest, index) => {
            const ref = useRef(null); // Create a ref for each interest item
            const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); // Detect if this interest is in view

            return (
              <motion.div
                ref={ref} // Attach ref for in-view detection
                key={index}
                className='h-48 p-6 border border-gray-200 shadow-lg rounded-lg flex flex-col justify-center items-start' // Increased height and adjusted styling
                initial={{ opacity: 0, scale: 0.9, y: 30 }} // Start hidden and down
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }} // Animate based on scroll
                transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect for each item
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Animation when hovered
              >
                {/* Interest Title */}
                <h3 className='text-2xl font-bold mb-2'>{interest.title}</h3>
                {/* Interest Description */}
                <p className='text-lg'>{interest.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Interests;
