import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Swal from 'sweetalert2';
import Resume from '../assets/Rafiul Hoque.pdf'; // Path to the certificate
import GUB from '../assets/GUB.jpg'; // Image for SweetAlert, adjust the path accordingly

const Award = () => {
  const sectionRef = useRef(null); // Reference to the Awards section
  const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 }); // Detect if section is in view

  // Sample awards data
  const awardsData = [
    {
      title: "Creative Talent Search Competition",
      description: "Awarded 'Best Talent of the Year' in 2014 for outstanding performance in Mathematics and Computer at the Upazila-level Creative Talent Search Competition. Recognized for excellence among school-level students.",
      topic: ["Mathematics & Computer"],
      certificate: "/src/assets/3rdB.pdf" // Update to use the same certificate path
    },
    // Add more awards as needed
  ];

  // Function to handle download and show SweetAlert
  const handleDownload = (e, certificate) => {
    e.preventDefault(); // Prevent the default anchor click behavior

    // Customizing SweetAlert with HTML and buttons
    Swal.fire({
      title: 'Success!',
      html: `
        <div style="text-align: center;">
          <p>Your certificate is being downloaded.</p>
          <p style="margin: 10px 0;"><strong>Award Certificate</strong></p>
          <img src="${GUB}" alt="Rafiul Hoque" style="width: 100px; border-radius: 50%; border: 2px solid #4CAF50;" />
          <p>Thank you</p>
        </div>
      `,
      icon: 'success',
      showConfirmButton: false,
      timer: 3000, // Alert will disappear after 3 seconds
      backdrop: `
        rgba(0,0,123,0.4)
        url("../assets/download.gif") // Adjust to your GIF path
        left top
        no-repeat
      `,
      willOpen: () => {
        Swal.showLoading(); // Show loading animation
      },
      didOpen: () => {
        // Programmatically trigger the download
        const link = document.createElement('a');
        link.href = certificate; // Use the certificate URL passed as argument
        link.download = 'Rafiul_Hoque_Certificate.pdf'; // Specify the name of the downloaded file
        document.body.appendChild(link);
        link.click(); // Simulate a click to trigger the download
        document.body.removeChild(link); // Clean up
      },
      customClass: {
        title: 'swal-title',
        html: 'swal-html',
        popup: 'swal-popup',
        confirmButton: 'swal-confirm'
      },
    });
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
                <strong>Description:</strong> {award.description}
              </p>

              {/* Topics and Button Section */}
              <div className="flex justify-between items-center mt-4">
                {/* Award Topics */}
                <ul className="flex space-x-4 mt-1">
                  <strong>Topics:</strong>
                  {award.topic && award.topic.map((tech, idx) => (
                    <li key={idx} className="ml-2 list-disc">{tech}</li>
                  ))}
                </ul>
                {/* Download Certificate Button */}
                <a 
                  href={award.certificate} 
                  onClick={(e) => handleDownload(e, award.certificate)} // Pass the certificate to handleDownload
                  className="bg-white rounded-full px-4 py-2 text-sm text-stone-800 border border-gray-300 hover:bg-gray-200 transition duration-300" // Style for the button
                >
                  Download Certificate
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Award;
