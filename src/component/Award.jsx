import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GUB from '../assets/GUB.jpg'; // Image for any future use (if needed)

const Award = () => {
  const sectionRef = useRef(null); // Reference to the Awards section
  const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 }); // Detect if section is in view

  // Sample awards data
  const awardsData = [
    {
      title: "Career Webinar Participation",
      description: "Participated in a career development webinar focused on job application tips and professional skills.",
      topic:["Professional Skills"],
      date: "16/08/2024",
      certificate: "" // No certificate link provided
    },
    {
      title: "Graphic Design Course",
      description: "Completed a 3-month Graphic Design Course at Good Approach and received a certificate of achievement.",
      topic:["Graphic Design"],
      date: "",
      certificate: "" // No certificate link provided
    },
    {
      title: "Creative Talent Search Competition",
      description: "Awarded 'Best Talent of the Year' in 2014 for outstanding performance in Mathematics and Computer at the Upazila-level Creative Talent Search Competition. Recognized for excellence among school-level students.",
      topic:["Mathematics & Computer"],
      date: "10/05/2014",
      certificate: "https://drive.google.com/file/d/1Sray2NxhvUk7_pZ_pAvvvDUcIPUTZHiM/view?usp=drive_link"
    },
    {
      title: "Deep Learning for Beginners Course",
      description: "Completed a foundational course in Deep Learning, gaining insights into AI and machine learning principles.",
      topic:["Deep Learning", "AI", "Machine Learning"],
      date: "20/12/2024",
      certificate: "" // No certificate link provided
    },
    {
      title: "General Grade Scholarship Award",
      description: "Awarded the General Grade Scholarship for outstanding academic performance in the 2005 scholarship examination organized by the Rajbari Zila Kindergarten Association.",
      topic:["Academic Excellence"],
      date: "2009",
      certificate: "" // No certificate link provided
    },
    {
      title: "General Grade Scholarship Award",
      description: "Earned the General Grade Scholarship for exceptional academic achievement in the 2005 scholarship examination organized by the Bangladesh Kindergarten Owners Association. This award acknowledged my dedication to studies and exceptional performance during my early educational years.",
      topic:[ "Academic Excellence"],
      date: "2008",
      certificate: "" // No certificate link provided
    }
  ];
  
  // Function to handle download directly
  const handleDownload = (certificate) => {
    window.open(certificate, '_blank', 'noopener,noreferrer'); // Open the certificate in a new tab
  };

  return (
    <section ref={sectionRef} className="py-10">
      {/* Animated Section Title */}
      <motion.h2
        className='text-3xl font-bold text-center mb-6'
        initial={{ opacity: 0, y: -50 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on scroll
        transition={{ duration: 0.6 }}
      >
        Awards & Honors
      </motion.h2>

      {/* Awards List */}
      <div className='flex flex-col items-center'>
        {awardsData.map((award, index) => {
          const ref = useRef(null); // Create a ref for each award item
          const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); // Detect if this award item is in view
          
          // Ref for the topics section
          const topicsRef = useRef(null);
          const isTopicsInView = useInView(topicsRef, { triggerOnce: true, threshold: 0.2 }); // Detect if topics are in view

          return (
            <motion.div
              ref={ref} // Attach ref for in-view detection
              key={index}
              className="mb-6 p-6 border rounded-lg shadow-md w-full max-w-4xl flex flex-col" // Flexbox layout for the award item
              initial={{ opacity: 0, scale: 0.9, y: 30 }} // Start hidden and down
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }} // Animate based on scroll
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect for each item
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Animation when hovered
            >
              {/* Award Title */}
              <h3 className="text-xl font-semibold">{award.title}</h3>
              <p className="mt-2">
                <strong>Description :</strong> {award.description}
              </p>

              {/* Topics and Button Section */}
              <div className="flex justify-between items-center mt-4">
                {/* Award Topics */}
                <motion.ul
                  ref={topicsRef} // Attach ref for topics in-view detection
                  className="flex space-x-4 mt-1"
                  initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
                  animate={isTopicsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on scroll
                  transition={{ duration: 0.5, delay: 0.1 }} // Smooth animation
                >
                  <strong>Topics :</strong>
                  {award.topic && award.topic.map((tech, idx) => (
                    <motion.li
                      key={idx}
                      className="ml-2" // Removed 'list-disc' to remove the dot icon
                      initial={{ opacity: 0, scale: 0.9 }} // Start hidden and scaled down
                      animate={isTopicsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} // Animate based on scroll
                      transition={{ duration: 0.5, delay: idx * 0.1 }} // Staggered effect for each topic
                    >
                      {tech}
                    </motion.li>
                  ))}
                </motion.ul>
                {/* Download Certificate Button */}
                <button
                  onClick={() => handleDownload(award.certificate)} // Call handleDownload without event
                  className="ml-6 bg-[#00000080] rounded-full px-4 py-2 text-sm text-white border border-[#ffffff33] transition duration-300 ease-in-out hover:bg-[#00000099] hover:text-[#ffffff] hover:border-[#ffffff]"
                  aria-label={`Download certificate for ${award.title}`}
                >
                  Download Certificate
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Award;
