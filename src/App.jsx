import React, { useState, useEffect, useRef } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Tech from './component/Tech';
import Projects from './component/Projects';
import Experience from './component/Experience';
import Publication from './component/Publication';
import Research from './component/Research';
import Education from './component/Education';
import Reference from './component/Reference';
import Activities from './component/Activities'; 
import Contract from './component/Contract';
import Interests from './component/Interest';
import Award from './component/Award'; // Import the new Award component

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#00091d] text-white">
      <div className="flex flex-col items-center animate-fadeIn">
        <div className="loader animate-spin"></div>
        {/* <div className="mt-4 text-center">
          <p className="text-lg font-semibold animate-fadeInDelay">Loading...</p>
          <p className="animate-fadeInDelay">Welcome to my website</p>
        </div> */}
      </div>

      <style jsx>{`
        .loader {
          width: 50px;
          height: 50px;
          border: 4px solid #fff;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInDelay {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        /* Animation for the fade-in effect */
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }

        /* Animation with a delay */
        .animate-fadeInDelay {
          animation: fadeInDelay 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  // Create refs for each section
  const heroRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const publicationRef = useRef(null);
  const researchRef = useRef(null);
  const referenceRef = useRef(null);
  const activitiesRef = useRef(null); 
  const contractsRef = useRef(null); 
  const interestsRef = useRef(null); // Create a ref for the Interests section
  const awardsRef = useRef(null); // Create a ref for the Awards section

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
      <div className='fixed inset-0 -z-10'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <Navbar 
          scrollToSection={scrollToSection}
          refs={{
            heroRef,
            techRef,
            projectsRef,
            educationRef,
            experienceRef,
            publicationRef,
            researchRef,
            referenceRef,
            activitiesRef, 
            contractsRef,
            interestsRef, // Add the new ref for Interests
            awardsRef, // Add the new ref for Awards
          }}
        />
        <div ref={heroRef}><Hero /></div>
        <div ref={techRef}><Tech /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={educationRef}><Education /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={publicationRef}><Publication /></div>
        <div ref={researchRef}><Research /></div>
        <div ref={activitiesRef}><Activities /></div> 
        <div ref={interestsRef}><Interests /></div> 
        <div ref={awardsRef}><Award /></div> 
        <div ref={referenceRef}><Reference /></div>
        <div ref={contractsRef}><Contract /></div>
      </div>
    </div>
  );
};

export default App;
