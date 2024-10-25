import React, { useRef, useState } from 'react';
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

          // State to manage visibility of the result for each education item
          const [showResult, setShowResult] = useState(false);

          // Handle button click
          const handleClick = () => {
            setShowResult(true); // Show result
            // Set a timeout to hide the result after 1 second
            const timer = setTimeout(() => {
              setShowResult(false); // Hide result after 1 second
            }, 1000);

            // Clear timeout if the component unmounts
            return () => clearTimeout(timer);
          };

          return (
            <motion.div
              ref={ref} // Attach ref for in-view detection
              key={index}
              className="relative mb-6 p-6 border rounded-lg shadow-md w-full max-w-4xl" // Added relative positioning
              initial={{ opacity: 0, scale: 0.9, y: 30 }} // Start hidden and down
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }} // Animate based on scroll
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect for each item
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Animation when hovered
            >
              {/* Education Title */}
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="mt-2">
                <strong>Institution:</strong> 
                {/* Institution link with white color and no underline */}
                <a 
                  href={edu.institutionLink} // Add the institution link here
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Recommended for security
                  className="text-white no-underline hover:text-gray-200 ml-1" // White color, no underline
                >
                  {edu.institution}
                </a>
              </p>
              <div className="flex justify-between items-center mt-2"> {/* Flex container for year and button */}
                <p>
                  <strong>Year:</strong> {edu.year} {/* Year of study */}
                </p>
                {/* Result Button */}
                <button 
                  onClick={handleClick} 
                  className="px-4 py-2 bg-[#00091d] text-white rounded hover:bg-[#1a1a2e] transition duration-200 ml-4" // Updated colors
                >
                  {showResult ? "Hide Result" : "Show Result"}
                </button>
              </div>
              {/* Result Display with Animation */}
              <div className="relative">
                {showResult && (
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
                    animate={{ opacity: 1, x: 0 }} // Animate to original position
                    exit={{ opacity: 0, x: 50 }} // Exit animation
                    transition={{ duration: 1.00 }} // Duration of the animation
                    className="text-xl mt-2 absolute right-0" // Match the title's font size and weight
                  >
                    <strong>Result:</strong> {edu.Result} {/* Result for each education item */}
                  </motion.div>
                )}
              </div>
              {edu.description && (
                <p className="mt-2">
                  <strong>Description:</strong> {edu.description} {/* Description */}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
