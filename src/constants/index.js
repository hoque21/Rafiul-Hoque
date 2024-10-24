import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Front End Developer",
    company: "MMIT Soft LTD.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js.`,
    technologies: ["Javascript", "React.js", "Node.js", "mySql","Tailwind"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://example.com/e-commerce", // Add the actual link here
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: "https://example.com/task-management", // Add the actual link here
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://rafiulhoque.netlify.app/", // Add the actual link here
  },
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

// Define your publication data
// Example of updated publication data
export const PUBLICATION = [
  {
    title: `Depressive and Suicidal Text-Based Sentiment Analysis In Bangla Using Deep Learning Models.`,
    journalName: 'Business & IT',
    journalLink: "https://bit.fsv.cvut.cz/",
    technologies: ["Python", "Natural Language Processing Toolkit",],
    status: 'Submitted and under review', // Add status field
  },
  {
    title: `Transformer-Based Sentiment Analysis for Classification Non-depressive and Suicidal Thought in Bangla Text.`,
    journalName: 'Heliyon',
    journalLink: "https://www.cell.com/heliyon/home",
    technologies: ["Python", "Natural Language Processing Toolkit",],
    status: 'Submitted and under review', // Add status field
  },
  
];

// Example of updated publication data

export const RESEARCH = [
  {
    title: `Image Caption Generator using Deep learning Model`,
    technologies: ["Python","Kaggle for Dataset","TensorFlow","Scikit-learn","Algorithm(Decision Tree)" ],
  },
  {
    title: `SmartCV: A Deep Learning Approach to Resume Screening`,
    technologies: ["Python","Kaggle for Dataset","NLTK" ],
  },
  {
    title: `Security aspect of autonomous vehicles system and object detection`,
    technologies: ["Python","Kaggle for Dataset","YOLO","Deep Learning MOdels"],
  },
  
];


// Education data array
export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Green University Of Bangladesh",
    year: "2020 - 2024",
    description: "Description : Focused on software development, data structures and Machine Learning.",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Government Science College",
    year: "2017 - 2019",
  },
  {
    degree: " Secondary School Certificate",
    institution: "Liaquat Ali Smriti School and College",
    year: "2012 - 2017",
  },
  
];



// Education Reference data array
export const EDUCATION_REFERENCES = [
  {
    name: "Mr x",
    position: "Professor of Computer Science",
    institution: "University of Technology",
    contact: "jane.smith@unitech.edu",
    relationship: "Academic Advisor",
  },
  
];




// src/constants/certificates.js

// constants.js
export const ACTIVITIES = [
  {
    title: "Community Service Project",
    description: "Organized a local community clean-up day, engaging residents in improving their neighborhood.",
    technologies: ["Community Engagement", "Event Planning", "Team Coordination"],
  },
  
  
];
