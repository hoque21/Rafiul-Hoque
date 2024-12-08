import { useRef } from 'react';
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

const App = () => {
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
