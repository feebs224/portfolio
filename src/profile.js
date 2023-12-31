const animation = {
  animate: true,
  duration: 750,
  once: false,
};

const header = {
  name: "Fibi Youssef",
};
const background = {
  type: "Snow",
};

const section2title = "About Me";
const about = {
  paragraph:
    "I am an aspiring Front-End Developer with a background in UX/UI Design. I've designed multiple wireframes and digital prototypes using Figma and Adobe XD. Once I was able to design websites, I wanted to build them from sratch with my own personal touch. I attended and graduated from Nucamp's Full Stack Web and Mobile Development Bootcamp and started using codes such as Bootstrap, React, React Native, Node.js, and many more to start creating my own websites. Come follow my journey!",
};

const skillsBar = [
  {
    name: "HTML",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    // svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    //faClass: "fab fa-code",
  },
  {
    name: "CSS",
    // svg: '',
   // faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    //faClass: "fab fa-js",
  },
  {
    name: "Bootstrap",
    // svg: '',
   // faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    //faClass: "fab fa-node",
  },
  {
    name: "React",
    // svg: '',
   // faClass: "fab fa-python",
  },
  {
    name: "React Native",
    // svg: '',
    //faClass: "fab fa-java",
  },
  {
    name: "GCP",
    // svg: '',
    //faClass: "fab fa-php",
  },
  {
    name: "Express",
    // svg: '',
    //faClass: "fas fa-database",
  },
  {
    name: "MongoDB",
    // svg: '',
   // faClass: "fab fa-aws",
  },
];

const section3Title = "Follow my projects' journeys!";
const projects = [
  {
    id: "project1",
    name: "Bakery",
    skills: ["Bootstrap, HTML, CSS"],
    url: "https://github.com/feebs224/Bakery-Website",
  },
  {
    id: "project2",
    name: "Project 2",
    skills: ["HTML, CSS, JS"],
    url: "",
  },
  {
    id: "project3",
    name: "Project 3",
    skills: ["HTML, CSS, JS"],
    url: "",
  },
  
];

const section4Title = "Check out my UX/UI page!";
const miscellaneous = [
  {
    id: "misc1",
    name: "Project 1",
    url: "",
  },
  {
    id: "misc2",
    name: "Project 2",
    url: "",
  },
  {
    id: "misc3",
    name: "Project 3",
    url: "",
  },
];

const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Contact me to hear more about my experience and skill sets!",
  copyright: "Fibi Youssef",
  contactUrl: "https://formspree.io/f/meqbqkjp",
};

const social = {
  github: "https://github.com/feebs224",
  linkedin: "https://linkedin.com/in/fibi-youssef",
};

export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
