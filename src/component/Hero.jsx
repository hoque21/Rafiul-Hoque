import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Swal from 'sweetalert2';
import GUB from '../assets/GUB.jpg'; // Image of Rafiul
import Resume from '../assets/Rafiul Hoque.pdf'; // Link to the resume

const Hero = () => {
  const HERO_CONTENT = "I am a Machine Learning Engineer with experience in building and deploying machine learning models.";
  const ref = useRef(null); // Create a ref for the paragraph
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 }); // Check if the paragraph is in view

  // Function to handle download and show SweetAlert
  const handleDownload = (e) => {
    e.preventDefault(); // Prevent the default anchor click behavior

    // Customizing SweetAlert with HTML and buttons
    Swal.fire({
      title: 'Success!',
      html: `
        <div style="text-align: center;">
          <p>Rafiul's CV is being downloaded.</p>
          <p style="margin: 10px 0;"><strong>Rafiul Hoque</strong></p>
          <img src="${GUB}" alt="Rafiul Hoque" style="width: 100px; border-radius: 50%; border: 2px solid #4CAF50;" />
          <p>Thank you</p>
        </div>
      `,
      icon: 'success',
      showConfirmButton: false,
      timer: 3000, // Alert will disappear after 3 seconds
      backdrop: `
        rgba(0,0,123,0.4)
        url("../assets/download.gif")
        left top
        no-repeat
      `,
      willOpen: () => {
        Swal.showLoading();
      },
      didOpen: () => {
        // Programmatically trigger the download
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'Rafiul_Hoque_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
    <div className='pb-4 lg:mb-36 flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-6xl'>

        <motion.div 
          className='w-full lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center lg:items-start lg:text-left text-center lg:pl-8'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="pb-2 text-4xl tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Rafiul Hoque
          </motion.h2>

          {/* Animated Subtitle */}
          <motion.span
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} // Delay for staggered effect
          >
            Machine Learning Engineer
          </motion.span>

          <motion.p
            ref={ref} // Attach the ref to the paragraph
            className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight'
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slight downward position
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate to full opacity and original position
            transition={{ duration: 0.6 }} // Duration of the animation
          >
            {HERO_CONTENT}
          </motion.p>

          {/* Animated Button */}
          <motion.a 
            href={Resume} 
            onClick={handleDownload} // Trigger handleDownload on click
            className="bg-white rounded-full px-6 py-3 text-sm text-stone-800 mb-10 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 12px rgba(0,0,0,0.2)' }} // Hover effect
            whileTap={{ scale: 0.95 }} // Tap effect
            transition={{ type: 'spring', stiffness: 300 }} // Smooth transition
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div 
          className='w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={GUB} 
            alt="Rafiul Hoque" 
            className='border border-stone-900 rounded-3xl max-w-[300px] lg:max-w-[400px]' 
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
