// Activities.js
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Swal from 'sweetalert2';
import { ACTIVITIES } from "../constants"; 

const Activities = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 });

  const downloadCertificate = (url, title) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}_Certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = (activity) => {
    Swal.fire({
      title: 'Download Certificate',
      text: `You are downloading the certificate for "${activity.title}".`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Download',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        downloadCertificate(activity.certificate, activity.title);
      }
    });
  };

  return (
    <section ref={sectionRef} className="py-10">
      <motion.h2
        className="my-20 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
      >
        Extracurricular Activities
      </motion.h2>

      <div className="flex flex-col items-center">
        {ACTIVITIES.map((activity, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="mb-6 p-6 border rounded-lg shadow-md w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-semibold">{activity.title}</h3>
              <p className="mt-2">
                <strong>Description:</strong> {activity.description}
              </p>
              <div className="flex justify-between items-center mt-2">
                <p className="mt-2">
                  <strong>Technologies Used:</strong> {activity.technologies.join(", ")}
                </p>
                <a 
                  href={activity.certificate} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-6 bg-[#00000080] rounded-full px-4 py-2 text-sm text-white border border-[#ffffff33] transition duration-300 ease-in-out hover:bg-[#00000099] hover:text-[#ffffff] hover:border-[#ffffff]"
                  aria-label={`Download or view certificate for ${activity.title}`}
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

export default Activities;
