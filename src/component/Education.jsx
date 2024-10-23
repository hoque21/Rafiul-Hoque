
  import React, { useRef } from 'react';
  import { motion, useInView } from 'framer-motion'; // Import Framer Motion for animations
  import { EDUCATION } from "../constants"; // Adjust the path as necessary
  
  const Education = () => {
    const sectionRef = useRef(null); // Reference to the Education section
    const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 }); // Detect if section is in view
  
    return (
      <div ref={sectionRef} className="p-4"> {/* Add padding for better spacing */}
        {/* Animated Section Title */}
        <motion.h2
          className='my-20 text-center text-4xl'
          initial={{ opacity: 0, y: -50 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on scroll
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
  
        {/* Education List */}
        <div className='flex flex-col items-center'>
          {EDUCATION.map((edu, index) => {
            const ref = useRef(null); // Create a ref for each education item
            const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); // Detect if this education item is in view
  
            return (
              <motion.div
                ref={ref} // Attach ref for in-view detection
                key={index}
                className="mb-6 p-6 border rounded-lg shadow-md w-full max-w-4xl" // Increased width for better presentation
                initial={{ opacity: 0, scale: 0.9, y: 30 }} // Start hidden and down
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }} // Animate based on scroll
                transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect for each item
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Animation when hovered
              >
                {/* Education Title */}
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="mt-2">
                  <strong>Institution:</strong> {edu.institution} {/* Institution name */}
                </p>
                <p className="mt-2">
                  <strong>Year:</strong> {edu.year} {/* Year of study */}
                </p>
                <p className="mt-2">
                  <strong></strong> {edu.description} {/* Description */}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Education;
  