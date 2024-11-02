import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Define interests with titles and descriptions
const INTERESTS = [
  { title: 'Computer Vision', description: 'Exploring techniques for enabling computers to interpret visual information.' },
  { title: 'Natural Language Processing', description: 'Working on the interaction between computers and humans through language.' },
  { title: 'Data Science', description: 'Analyzing and interpreting complex data to aid decision-making.' },
  // Add more interests as needed
];

const Interests = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={sectionRef} className='pb-12'> {/* Adjust bottom padding */}
      {/* Animated Section Title */}
      <motion.h2
        className='my-10 text-center font-semibold text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
      >
        Interest
      </motion.h2>

      {/* Container for Interests List */}
      <div className='max-w-5xl mx-auto px-4'>
        {/* Interests List as a Responsive Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {INTERESTS.map((interest, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

            return (
              <motion.div
                ref={ref}
                key={index}
                className='h-auto p-6 border border-gray-400 shadow-lg rounded-lg flex flex-col justify-start items-start bg-opacity-80' 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                {/* Interest Title */}
                <h3 className='text-2xl font-bold mb-2 text-left'>{interest.title}</h3>
                {/* Interest Description */}
                <p className='text-lg text-left'>{interest.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Interests;
