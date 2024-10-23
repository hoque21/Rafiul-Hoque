import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <footer ref={footerRef} className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto flex flex-col items-center'>
        <motion.h2
          className='text-2xl mb-4'
          initial={{ opacity: 0, y: 50 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Contact Information
        </motion.h2>

        <motion.p
          className='text-lg mb-2'
          initial={{ opacity: 0, y: 50 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Mobile: <a href='tel:+88 01712075433' className='text-blue-400 hover:underline'>01712075433</a>
        </motion.p>

        <motion.p
          className='text-lg mb-2'
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
          className='text-lg mb-4'
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

        {/* Embed Google Map for Present Address (You can uncomment if needed) */}
        {/* <motion.div
          className='w-full max-w-xl mb-4'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isFooterInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9633350584797!2d90.35017191532773!3d23.80493848459342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c783b849fbaf%3A0x81b3df150d4a9c6!2s659%2F2%2C%20West%20Kazipara%2C%20Mirpur%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1622521692107!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div> */}

        <div className='flex space-x-4 mb-4'>
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

        <p> @2024 Rafiul Hoque. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
