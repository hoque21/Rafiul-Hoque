import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ACTIVITIES = [
  {
    title: "3rd Baliakandi Upzila Scout Samabesh",
    description: "Participated in the 3rd Baliakandi Upzila Scout Samabesh-2015, fostering leadership and teamwork skills.",
    technologies: ["Leadership", "Teamwork", "Community Engagement"],
    certificate: "https://drive.google.com/file/d/1ttukomZyK25ET-lAHd4Go6s3zHTmJ-Mv/view?usp=drive_link",
  },
  {
    title: "3rd Zila Scout Samabesh",
    description: "Engaged in the 3rd Zila Scout Samabesh-2016, promoting scouting values and community service.",
    technologies: ["Community Service", "Event Participation", "Scouting Skills"],
    certificate: "https://drive.google.com/file/d/1-h4v43Hzi6U6HmFei6PgUTs1hVJZqF0w/view?usp=drive_link",
  },
  {
    title: "4th National Power & Energy Camp",
    description: "Attended the 4th National Power & Energy Camp 2015, focusing on renewable energy and sustainability.",
    technologies: ["Renewable Energy", "Sustainability Education", "Team Collaboration"],
    certificate: "https://drive.google.com/file/d/1tCvKPyC2yuUT4CWhfvTkzzh1lZLyp_wH/view?usp=drive_link",
  },
  {
    title: "DUSS Science Festival",
    description: "Participated in the DUSS Science Festival 2017, demonstrating scientific projects and experiments.",
    technologies: ["Science Communication", "Project Presentation", "Teamwork"],
    certificate: "/src/assets/duss.pdf",
  },
  {
    title: "1st GSCPC National Photography Festival",
    description: "Competed in the 1st GSCPC National Photography Festival-2018, highlighting photography skills.",
    technologies: ["Photography", "Artistic Expression", "Visual Storytelling"],
    certificate: "https://drive.google.com/file/d/1aad6oNGWEsqzWQVd_KnV5Ac6pb8Wfn9F/view?usp=drive_link",
  },
  {
    title: "Graphic Design Course",
    description: "Received a certificate of achievement for the successful completion of a 3-month Graphic Design Course at Good Approach.",
    technologies: ["Graphic Design", "Digital Art", "Creativity"],
    certificate: "https://drive.google.com/file/d/1ITTXMbjnS9cHfcQgYY-TF4EH4SfGpWZX/view?usp=drive_link",
  },
  {
    title: "Career Webinar Participation",
    description: "Successfully participated in the webinar titled 'Job এর জন্য নিজেকে কিভাবে Shortlist করবেন?'.",
    technologies: ["Career Development", "Job Application Tips", "Professional Skills"],
    certificate: "https://drive.google.com/file/d/1lecgzXVES4867ZQagpALC2v65-dVM4Vp/view?usp=drive_link"
  }
];

const Activities = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Number of activities to show initially
  const [loading, setLoading] = useState(false); // Loading state
  const [showAll, setShowAll] = useState(false); // State to track if all activities should be shown
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 });

  const handleShowMore = () => {
    setLoading(true); // Set loading state to true
    setTimeout(() => {
      setVisibleCount((prevCount) => Math.min(prevCount + 3, ACTIVITIES.length));
      setLoading(false); // Reset loading state after delay
    }, 800); // Simulate a loading delay (adjust time as needed)
  };

  const handleHideActivities = () => {
    setVisibleCount(3); // Reset to show only the initial activities
    setShowAll(false); // Set showAll to false
  };

  // Check if all activities are currently visible
  const allActivitiesVisible = visibleCount >= ACTIVITIES.length;

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
        {ACTIVITIES.slice(0, visibleCount).map((activity, index) => (
          <motion.div
            key={index}
            className="mb-6 p-6 border rounded-lg shadow-md w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
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
                aria-label={`Download certificate for ${activity.title}`}
              >
                Download Certificate
              </a>
            </div>
          </motion.div>
        ))}

        {loading && (
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-lg">Loading...</span>
          </motion.div>
        )}
      </div>

      {/* Conditionally render the button based on loading state and showAll state */}
      {!loading && !showAll && visibleCount < ACTIVITIES.length && (
        <div className="flex justify-center mt-6">
          <motion.button
            onClick={handleShowMore}
            className="bg-[#00000080] rounded-full px-4 py-2 text-sm text-white border border-[#ffffff33] transition duration-300 ease-in-out hover:bg-[#00000099] hover:text-[#ffffff] hover:border-[#ffffff]"
            initial={{ x: 100, opacity: 0 }}  // Start from right, off-screen
            animate={{ x: 0, opacity: 1, scale: [1, 1.1, 1] }}  // Slide in and pulse
            transition={{
              x: { type: "spring", stiffness: 150, damping: 8 }, // Faster slide with higher stiffness and lower damping
              opacity: { duration: 0.4 },  // Slightly quicker fade-in
              scale: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }, // Faster pulse effect
            }}
            whileHover={{ scale: 1.1 }}  // Smooth scaling on hover
            whileTap={{ scale: 0.95 }}   // Slight scale down on tap
          >
            Show More
          </motion.button>
        </div>
      )}

      {/* Show 'Hide' button if all activities are visible */}
      {!loading && allActivitiesVisible && (
        <div className="flex justify-center mt-6">
          <motion.button
            onClick={handleHideActivities}
            className="bg-[#00000080] rounded-full px-4 py-2 text-sm text-white border border-[#ffffff33] transition duration-300 ease-in-out hover:bg-[#00000099] hover:text-[#ffffff] hover:border-[#ffffff]"
            initial={{ x: 100, opacity: 0 }}  // Start from right, off-screen
            animate={{ x: 0, opacity: 1, scale: [1, 1.1, 1] }}  // Slide in and pulse
            transition={{
              x: { type: "spring", stiffness: 150, damping: 8 }, // Faster slide with higher stiffness and lower damping
              opacity: { duration: 0.4 },  // Slightly quicker fade-in
              scale: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }, // Faster pulse effect
            }}
            whileHover={{ scale: 1.1 }}  // Smooth scaling on hover
            whileTap={{ scale: 0.95 }}   // Slight scale down on tap
          >
            Hide Activities
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Activities;
