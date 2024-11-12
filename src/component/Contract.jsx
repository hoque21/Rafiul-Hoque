import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <footer ref={footerRef} className='bg-gray-800 text-white py-6 md:py-10'>
      <div className='container mx-auto flex flex-col items-center  px-4 sm:px-6'>
        <motion.h2
          className='text-xl sm:text-2xl font-bold mb-4'
          initial={{ opacity: 0, y: 50 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Contact Information
        </motion.h2>

        <motion.p
          className='text-base sm:text-lg mb-2 text-center'
          initial={{ opacity: 0, y: 50 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Mobile: <a href='tel:+88 01712075433' className='text-blue-400 hover:underline'>01712075433</a>
        </motion.p>

        <motion.p
          className='text-base sm:text-lg mb-2 text-center'
          initial={{ opacity: 0, y: 50 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Present Address: 
          <a 
            href='https://www.google.com/maps/search/?api=1&query=659/2,+West+Kazipara,+Mirpur,+Dhaka,+Bangladesh'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:underline ml-1'
          >
            659/2, West Kazipara, Mirpur, Dhaka, Bangladesh
          </a>
        </motion.p>

        <motion.p
          className='text-base sm:text-lg mb-4 text-center'
          initial={{ opacity: 0, y: 50 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Permanent Address: 
          <a 
            href='https://www.google.com/maps/search/?api=1&query=Vity,+Kalukhali,+Rajbari,+Dhaka,+Bangladesh'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:underline ml-1'
          >
            Vity, Kalukhali, Rajbari, Dhaka, Bangladesh
          </a>
        </motion.p>

        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4'>
          {/* Social Media Icons */}
          <a href='https://www.facebook.com/rafiulhoque21/' target='_blank' rel='noopener noreferrer' aria-label="Facebook">
            <motion.div
              initial={{ scale: 0 }}
              animate={isFooterInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5 }}
              className='text-blue-500 hover:text-blue-700'
            >
              <FaFacebook size={24} />
            </motion.div>
          </a>
          <a href='https://www.linkedin.com/in/rafiul-hoque-967164232/' target='_blank' rel='noopener noreferrer' aria-label="LinkedIn">
            <motion.div
              initial={{ scale: 0 }}
              animate={isFooterInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5 }}
              className='text-blue-500 hover:text-blue-700'
            >
              <FaLinkedin size={24} />
            </motion.div>
          </a>
        </div>

        <p className='text-sm text-center sm:text-base'> @2024 Rafiul Hoque. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
