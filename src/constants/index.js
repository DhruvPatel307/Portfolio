import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  express,
  github,
  instagram,
  linkedin,
  figma,
  docker,
  meta,
  Agevole,
  tesla,
  charusat,
  LMS,
  MCQ,
  Blog,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Share",
    title: "Share",
  },
];

const services = [
  {
    title: "Full stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "APP Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "ML engineer",
    icon: backend,
  },
  {
    title: "LLM enthusiastic",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "Express",
  //   icon: express,
  // },
  // {
  //   name: "mySQL",
  //   icon: threejs,
  // },
  // {
  //   name: "C/C++",
  //   icon: git,
  // },
  // {
  //   name: "Flutter",
  //   icon: mongodb,
  // },
  // {
  //   name: "Canva",
  //   icon: threejs,
  // },
  // {
  //   name: "Postman",
  //   icon: git,
  // },
  // {
  //   name: "Bootstrap",
  //   icon: git,
  // },
  // {
  //   name: "Java",
  //   icon: mongodb,
  // },
  // {
  //   name: "Python",
  //   icon: threejs,
  // },
  // {
  //   name: "C-Sharp",
  //   icon: git,
  // },
  
];

const experiences = [
  {
    title: "MERN Developer",
    company_name: "Agevole Innovation",
    icon: Agevole,
    iconBg: "#383E56",
    date: "May 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MCQ generator Chatbot",
    company_name: "Charusat",
    icon: charusat,
    iconBg: "#383E56",
    date: "August 2024 - Nov 2024",
    points: [
      "An MCQ Generator Chatbot using an LLM (Large Language Model) is an AI-powered chatbot that generates multiple-choice questions (MCQs) based on user-provided topics or text. It leverages an LLM (like GPT) to analyze content and create relevant questions, answer choices, and correct answers"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dhruv proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dhruv does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Dhruv optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Library Management System",
    description:
      "A Learning Management System (LMS) using PHP and MySQL is a web-based platform that enables educators to create, manage, and deliver online courses, track student progress, and facilitate communication. It utilizes PHP for backend logic and MySQL for database management, ensuring a scalable and efficient e-learning experience.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mySql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: LMS,
    source_code_link: "https://github.com/DhruvPatel307/Library-Management-System",
  },
  {
    name: "personal blog's web",
    description:
      "A personal blog website using the MERN stack (MongoDB, Express.js, React, Node.js) allows users to create, edit, and manage blog posts with a dynamic and interactive UI. It provides a scalable backend with MongoDB, a RESTful API with Express & Node.js, and a responsive frontend with React for seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: Blog,
    source_code_link: "https://github.com/DhruvPatel307/personal-blog-s-web",
  },
  {
    name: "MCQ Generator",
    description:
      "An MCQ Generator using LLMs and OpenAI automatically creates multiple-choice questions from input text or topics, ensuring diverse difficulty levels and accurate answer choices. It leverages OpenAI’s GPT models to generate, refine, and validate questions, making it ideal for quizzes, exams, and educational platforms",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "openAI",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: MCQ,
    source_code_link: "https://github.com/DhruvPatel307/MCQ-GENERATOR",
  },
];

const socials = [
  {
    name: "Instagram",
    icon: instagram, 
    url: "https://www.instagram.com/_dhruv.ig/?hl=en",
  },
  {
    name: "LinkedIn",
    icon: linkedin, 
    url: "https://www.linkedin.com/in/dhruv-patel-35209325a/",
  },
  {
    name: "git",
    icon: github, 
    url: "https://github.com/DhruvPatel307",
  },
];

export { services, technologies, experiences, testimonials, projects ,socials };
