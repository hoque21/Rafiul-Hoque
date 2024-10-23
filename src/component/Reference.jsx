import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion for animations
import { EDUCATION_REFERENCES } from "../constants"; // Adjust the path as necessary

const EducationReferences = () => {
  const sectionRef = useRef(null); // Reference to the Education References section
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
         References
      </motion.h2>

      {/* References List */}
      <div className='flex flex-col items-center'>
        {EDUCATION_REFERENCES.map((ref, index) => {
          const refItem = useRef(null); // Create a ref for each reference item
          const isInView = useInView(refItem, { triggerOnce: true, threshold: 0.2 }); // Detect if this reference is in view

          return (
            <motion.div
              ref={refItem} // Attach ref for in-view detection
              key={index}
              className="mb-6 p-6 border rounded-lg shadow-md w-full max-w-4xl" // Increased width for better presentation
              initial={{ opacity: 0, scale: 0.9, y: 30 }} // Start hidden and down
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }} // Animate based on scroll
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect for each item
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Animation when hovered
            >
              {/* Reference Name */}
              <h3 className="text-xl font-semibold">{ref.name}</h3>
              <p className="mt-2">
                <strong>Position:</strong> {ref.position} {/* Position of the reference */}
              </p>
              <p className="mt-2">
                <strong>Institution:</strong> {ref.institution} {/* Institution name */}
              </p>
              <p className="mt-2">
                <strong>Contact:</strong> {ref.contact} {/* Contact information */}
              </p>
              <p className="mt-2">
                <strong>Relationship:</strong> {ref.relationship} {/* Relationship to you */}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationReferences;