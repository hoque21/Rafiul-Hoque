import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={sectionRef} className='pb-4'>
      <motion.h2
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className='flex flex-col items-center'>
        {EXPERIENCES.map((experience, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

          return (
            <motion.div
              ref={ref}
              key={index}
              className='mb-8 flex flex-col lg:flex-row w-full max-w-5xl p-6 border border-gray-200 shadow-lg rounded-lg'
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className='w-full lg:w-1/4 mb-4 lg:mb-0'>
                <motion.p
                  className='text-sm text-stone-400'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {experience.year}
                </motion.p>
              </div>

              <div className='w-full lg:w-3/4 lg:pl-6'>
                <motion.h3
                  className='text-2xl font-bold mb-2'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  {experience.role} - <span className='text-xl text-stone-500'>{experience.company}</span>
                </motion.h3>

                <motion.p
                  className='mb-4 text-lg'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  {experience.description}
                </motion.p>

                <motion.div
                  className='flex flex-wrap'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className='mr-2 mb-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded'
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Certificate Download Button */}
                {experience.certificate && (
                  <motion.a
                    href={experience.certificate}
                    download
                    className='mt-4 inline-block bg-[#00000080] rounded-full px-4 py-2 text-sm text-white border border-[#ffffff33] transition duration-300 ease-in-out hover:bg-[#00000099] hover:text-[#ffffff] hover:border-[#ffffff]'
                    aria-label={`Download certificate for ${experience.role}`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    Download Certificate
                  </motion.a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
