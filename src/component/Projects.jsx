import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import project1 from "../assets/projects/project-1.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://rafiulhoque.netlify.app/",
    image: project3,
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Nodejs", "MongoDB"],
    link: "https://github.com/hoque21/Bazar-E-commerce-Site-",
    image: project1,
  },
  {
    title: "Fake News Detection",
    description:
      "A machine learning application that detects fake news articles by analyzing their content and sources.",
    technologies: ["Python", "Flask", "Machine Learning", "Natural Language Processing"],
    link: "https://example.com/fake-news-detection",
    image: project1,
  },
  {
    title: "Heart Disease Prediction",
    description:
      "An AI-based application that predicts the likelihood of heart disease in patients based on medical data.",
    technologies: ["Python", "TensorFlow", "Machine Learning"],
    link: "https://github.com/hoque21/Heart-Disease-Prediction",
    image: project1,
  },
  {
    title: "Diabetes Prediction",
    description:
      "An application that uses artificial intelligence to predict the risk of diabetes in individuals based on health metrics.",
    technologies: ["Python", "Scikit-Learn", "Machine Learning"],
    link: "https://example.com/diabetes-prediction",
    image: project1,
  },
  {
    title: "Doctor Appointment System",
    description:
      "A web application for scheduling doctor appointments, with user authentication and real-time notifications.",
    technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Firebase"],
    link: "https://github.com/hoque21/Doctors-Appointment-Project-Client-site-",
    image: project4,
  },
  {
    title: "School Management System",
    description:
      "A comprehensive web application for managing student records, classes, and attendance.",
    technologies: ["HTML", "CSS", "Tailwind"],
    link: "https://cantschoolmanagement.netlify.app/",
    image: project4,
  },
  {
    title: "QR Code Generator",
    description:
      "A simple web application that generates QR codes for URLs or text inputs using JavaScript and HTML.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
    link: "https://codegenerator001.netlify.app",
    image: project1,
  },
  {
    title: "Expense Tracker",
    description:
      "An application that helps users track their expenses, manage budgets, and analyze spending patterns.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    link: "https://example.com/expense-tracker",
    image: project1,
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false); // Loading state for "Show More" button
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 });

  const handleShowMore = () => {
    setLoading(true); // Set loading to true
    setTimeout(() => {
      setVisibleCount((prevCount) => Math.min(prevCount + 3, PROJECTS.length));
      setLoading(false); // Reset loading after timeout
    }, 1000); // Simulated loading time
  };

  return (
    <section ref={sectionRef} className="py-10">
      <motion.h2
        className="my-20 text-center text-4xl font-bold text-[#cdd7f6]"
        initial={{ opacity: 0, y: -50 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="flex flex-col items-center">
        {PROJECTS.slice(0, visibleCount).map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 p-6 border border-[#1a2a40] rounded-lg shadow-md w-full max-w-4xl bg-[#121828]"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center">
              <img src={project.image} alt={project.title} className="w-32 h-32 mr-4 rounded" />
              <div>
                <h3 className="text-xl font-semibold text-[#e0e6f6]">{project.title}</h3>
                <p className="mt-2 text-[#a4acc4]">{project.description}</p>
                <div className="mt-2 text-[#93a4c6]">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </div>
                <div className="mt-4 flex">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold text-[#f0f6ff] bg-[#1a2a40] rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-[#253a52] hover:shadow-xl focus:ring-4 focus:ring-blue-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center mt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-lg text-[#a4acc4]"
          >
            Loading...
          </motion.div>
        </div>
      ) : (
        visibleCount < PROJECTS.length && (
          <div className="flex justify-center mt-6">
            <motion.button
              onClick={handleShowMore}
              className="bg-[#1a2a40] rounded-full px-4 py-2 text-sm text-[#cdd7f6] border border-[#293b55] transition duration-300 ease-in-out hover:bg-[#253a52] hover:text-[#e0e6f6] hover:border-[#e0e6f6]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: [1, 1.1, 1] }}
              transition={{
                x: { type: "spring", stiffness: 150, damping: 8 },
                opacity: { duration: 0.4 },
                scale: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Show More
            </motion.button>
          </div>
        )
      )}
    </section>
  );
};

export default Projects;
