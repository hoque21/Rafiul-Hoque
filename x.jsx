
import { motion } from 'framer-motion';
import {  FaPhone } from 'react-icons/fa'; // Import icons

const Contract = () => {
  return (
    <motion.footer
      className="bg-[#1a1a1a] text-stone-300 py-10 mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-4">
          <h4 className="text-xl font-semibold">Contact Information</h4>
        </div>
        <div className="flex flex-col items-center gap-2">
          <a
            href="tel:+8801712075433"
            className="flex items-center gap-2 text-lg hover:text-blue-500"
            aria-label="Call Me"
          >
            <FaPhone /> +88 01712075433
          </a>
          
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold">Addresses</h4>
          <div className="flex flex-col items-center gap-1">
            {/* Permanent Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Vity,Pangsha,Rajbari,Dhaka,Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md hover:text-blue-500"
              aria-label="Permanent Address on Map"
            >
              Permanent Address: Vity, Pangsha, Rajbari, Dhaka, Bangladesh
            </a>
            {/* Present Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=659/2,West+Kazipara,Mirpur,Dhaka,Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md hover:text-blue-500"
              aria-label="Present Address on Map"
            >
              Present Address: 659/2, West Kazipara, Mirpur, Dhaka, Bangladesh
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Rafiul Hoque. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Contract;


