import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion for animations
import { PUBLICATION } from "../constants"; // Adjust the path as necessary

const Publication = () => {
  const sectionRef = useRef(null); // Reference to the Publication section
  const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 }); // Detect if section is in view

  return (
    <div ref={sectionRef} className="p-4"> {/* Add padding for better spacing */}
      {/* Animated Section Title */}
      <motion.h2
        className='my-20 font-bold text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on scroll
        transition={{ duration: 0.6 }}
      >
        Publication
      </motion.h2>

      {/* Publications List */}
      <div className='flex flex-col items-center'>
        {PUBLICATION.map((pub, index) => {
          const ref = useRef(null); // Create a ref for each publication item
          const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); 
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
              {/* Publication Title */}
              <h3 className="text-xl font-semibold">{pub.title}</h3>
              <p className="mt-2">
                <strong>Journal Name: </strong> 
                <a 
                  href={pub.journalLink} // Link to the journal
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Security measures for external links
                  className="text-blue-500 hover:underline"
                >
                  {pub.journalName || "N/A"}
                </a>
              </p>
              
              {pub.doi && ( // Display DOI only if it exists
                <p className="mt-2">
                  <strong>DOI: </strong> 
                  <a
                    href={`https://doi.org/${pub.doi}`} // Construct DOI link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {pub.doi}
                  </a>
                </p>
              )}

              <p className="mt-2">
                <strong>Technologies Used: </strong> {pub.technologies.join(", ")} {/* Technologies */}
              </p>
              <p className="mt-2">
                <strong>Status: </strong> {pub.status} {/* Publication status */}
              </p>

              {/* Highlighting Rafiul Hoque in Bold */}
              <p className="mt-2">
                <strong>Authors: </strong> 
                {pub.authors.map((author, idx) => 
                  author === "Rafiul Hoque" ? <span key={idx} className="font-bold">{author}</span> : author
                ).join(', ').replace(/, ([^,]*)$/, ' and $1')}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Publication;
