/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  vueIcon,
  avatar,
  gitlabIcon,
  laravelIcon,
  golangIcon,
  tailwindIcon,
  bootstrapIcon,
  agileIcon,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  vueIcon,
  gitlabIcon,
  avatar,
  laravelIcon,
  golangIcon,
  tailwindIcon,
  bootstrapIcon,
  agileIcon,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

		"I bring 3 years of experience in my career, specializing in HTML5, CSS3, and JavaScript, with a strong command of modern frameworks like React and Vue.js. I'm well-versed in version control systems like Git, which enables seamless collaborative development.",
    "My strengths lie in problem-solving and effectively troubleshooting and debugging complex frontend challenges. I'm passionate about keeping up with the latest trends and best practices in frontend development", 
    "Additionally, I've gained experience working on backend projects using technologies such as Golang, Laravel, Python, and Sails.js",
    "You can download my resume here."
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Dart Scoreboar",
    description: 'In this project, I have developed a Dart scoreboard using Vue 2 while also leveraging the Bootstrap framework to ensure a responsive and well-designed user interface.',
  },
  {
    name: 'WebAuditors Log',
    description: 'This system will collect server logs, and will generate reports , which will help website owner to optimise their web pages. This Project is in Nuxt 2 for frontend and bootstrap for responsive and well-designed user interface.',
    },
  {
    name: 'Tradersync',
    description: 'This project is related to stock markets trading. This project is in Vue 3 for frontend and Quasar for responsive and well-designed user interface. The ultimate stock trading journal that helps you improve your trading performance.',
    },
  {
    name: 'Platform Engineering',
    description: 'Our company providing platform engineering services to client. So i worked on designing Expertise Git HTML , CSS and maintaining that website with Nuxt and Bootstrap. In this website we also used Directus so our marketing team update site without any help of developer.',
   },
  {
    name: 'OpenCV Courses',
    description: 'This is fully static website with Hugo. This website is related to learn opencv course with the help of our experienced expert. Also in this site i implemented razorpay payment integration for payment.',
    },
  {
    name: 'Asana Clockify Bridge',
    description: 'In this project i worked on golang and create bridge that directly create task in clockify based on github issues, and same for asana',
   },
  {
    name: 'Rajkot tech',
    description: 'This is website that shows past and future events related to teh in rajkot. Also you can book ticket from there for event.',
   },
  {
    name: 'Wishyoo',
    description: 'This is internationnal client project for e celebration cards like birthday, annivarsary etc.. Its frontend is in react and backend is in sail js. I worked on both frontend and backend.',
   },
  {
    name: 'Cognyx',
    description: 'This is also international client project for create BOM( billing of material) for any product. I am currently working in this project. Its frontend is in Vue3 and backend is in laravel and i am working in both backend + frontend.',
   }
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'bootstrap',
    title: 'Bootstrap',
    icon: bootstrapIcon,
    description:
    'Developed and maintained responsive web applications using HTML, CSS, and JavaScript frameworks, improving load times by 30%.',
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    icon: tailwindIcon,
    description:
    'I have extensive experience using Tailwind CSS across multiple projects and possess a deep understanding of its utilities and best practices.',
  },
  {
    id: 'vue',
    title: 'Vue',
    icon: vueIcon,
    description:
    'I have 3 years of experience with Vue.js, possessing in-depth knowledge and expertise in developing dynamic, reusable and scalable applications.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'gitlab',
    title: 'GitLab',
    icon: gitlabIcon,
    description:
      'I am skilled in using GitLab for seamless project collaboration, code sharing, and issue tracking. Through GitLab, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity.',
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite and vue. I can convert bootstrap application to Vite without any problems.',
  },
  {
    id: 'laravel',
    title: 'Laravel',
    icon: laravelIcon,
    description:
      'I have proficient knowledge of Laravel, including experience with event sourcing architecture. I am skilled in maintaining and working with Laravel applications efficiently.',
  },
  {
    id: 'go',
    title: 'Golang',
    icon: golangIcon,
    description:
      'In backend I gained strong skills in Go during my training and can confidently handle various tasks in Go development.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'In backend I have python knowledge also. I worked in python in many projects. I am fimilar with python scraping library.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'I have worked with various backend languages, including Node.js, which I particularly enjoy. I can easily manage and develop projects using Node.js.',
  },
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
  {
    id: 'agile',
    title: 'Agile',
    icon: agileIcon,
    description:
      'I am familiar with Agile methodology and have been working with it for 3 years, giving me a solid understanding and practical experience in Agile practices.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
