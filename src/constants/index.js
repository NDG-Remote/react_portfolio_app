import {
  natalia_morgan,
  wolfram_schmidt,
  noe_toneur,
  linkedin,
  html,
  css,
  js,
  python,
  sql,
  c,
  django,
  react,
  flask,
  mariadb,
  github,
  githubwhite,
  vscode,
  wordpress,
  wix,
  figma,
  jira,
  confluence,
  magento,
  gitlab,
  frappe,
  obsidian,
  webflow,
  docker,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
    {
    id: "contact",
    title: "Contact",
  },
];

// export const stats = [
//   {
//     id: "stats-1",
//     title: "User Active",
//     value: "3800+",
//   },
//   {
//     id: "stats-2",
//     title: "Trusted by Company",
//     value: "230+",
//   },
//   {
//     id: "stats-3",
//     title: "Transaction",
//     value: "$230M+",
//   },
// ];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "GitHub",
        link: "https://github.com/NDG-Remote",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/andrea-nadia-glaus",
      },
      {
        name: "E-Mail",
        link: "mailto:andrea.glaus@me.com",
      },
    ],
  },
  {
    title: "Courses",
    links: [
      {
        name: "HarvardX - Computer Science",
        link: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science",
      },
      {
        name: "Johns Hopkins - HTML, CSS, JS",
        link: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      },
      {
        name: "Calarts - UI / UX Design",
        link: "https://www.coursera.org/professional-certificates/google-ux-design",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Imprint",
        link: "#",
      },
      {
        name: "Cookies",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: githubwhite,
    link: "https://github.com/NDG-Remote",
  },
  {
    id: "social-media-2",
    icon: linkedin,
    link: "https://www.linkedin.com/in/andrea-nadia-glaus",
  },
];

export const webAppsProjects = [
  {
    id: "project-0",
    title: "Fruit Sharing Web App",
    description: "For my final project for the CS50x Computer Science course, I developed PickHub, a Flask-based web application. On my hometown, Mallorca, many private fruit trees go unharvested due to overproduction. My app serves as a platform for homeowners and farmers to share surplus fruits and vegetables. Users can notify others about available produce for free, at a fair price, or in exchange for gardening help.",
    stack: ["Python", "Flask", "SQLite3", "Jinja", "JavaScript", "Bootstrap", "Google Maps API"],
    cta: "Create a free account and test the web app in its test market, the Balearic Islands of Spain.",
    button: "Test the app",
    link: "https://pick-hub.onrender.com/",
    img: natalia_morgan,
  },
  {
    id: "project-1",
    title: "This Portfolio React Web App",
    description: "I designed and developed this personal portfolio website using React to provide a dynamic and interactive platform. It gave me insight into the importance of structuring the stack and documenting the development process. I also explored React packages, such as sliders, and used Tailwind CSS for the first time. The deployment process was incredibly easy and gave me valuable experience.",
    stack: ["React", "Tailwind CSS", "Vite"],
    cta: "Please check out my GitHub repository to gain more insights.",
    button: "View GitHub Repo",
    link: "https://github.com/NDG-Remote/react_portfolio_app.git",
    img: natalia_morgan,
  },
  {
    id: "project-2",
    title: "Django CS50W Project",
    description: "For my current Computer Science module, CS50W (Web Programming) at HarvardX, I worked on four Django projects. One of my favorites was an eBay-like web app, with functionalities like login, category pages, adding listings, the bidding process, and wishlists. Additionally, I revisited SQL concepts, models, views, migrations, and used Django's Admin app and shell.",
    stack: ["Django", "SQLite3", "Django-Jinja", "HTML", "CSS", "Bootstrap"],
    cta: "Take a look at the codebase on GitHub.",
    button: "Visit my GitHub Repo",
    link: "#", // Add the actual GitHub link here
    img: natalia_morgan,
  },
];

export const courses = [
  {
    id: "course-0",
    year: "2025",
    title: "HarvardX: CS50's Web Programming with Python and JavaScript",
    content: "This course picks up where CS50 left off, diving more deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap.",
    link: "https://www.edx.org/learn/web-development/harvard-university-cs50-s-web-programming-with-python-and-javascript"
  },
  {
    id: "course-1",
    year: "2024",
    title: "HarvardX: CS50's Understanding Technology",
    content: "CS50T covered essential basics of the internet, multimedia, security, web development, and programming.",
    link: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-understanding-technology"
  },
  {
    id: "course-2",
    year: "2023",
    title: "HarvardX - CS50's Introduction to Computer Science",
    content: "CS50x introduced me to computer science and programming, covering C, HTML, CSS, JavaScript, SQL, Python, and Flask. It provided a deep understanding of key concepts like Computer Science, Resource Management, Data Structures, and Algorithms.",
    link: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science"
  },
  {
    id: "course-3",
    year: "2022",
    title: "Johns Hopkins - HTML, CSS, JS",
    content: "This course equips participants with essential skills for modern web design and development, focusing on HTML, CSS (including Bootstrap), and JavaScript.",
    link: "https://www.coursera.org/account/accomplishments/verify/B68MQSQ2V57Q?utm_product=course"
  },
    {
    id: "course-4",
    year: "2022",
    title: "California Institute of the Arts - Visual Elements of User Interface Design",
    content: "Explored design principles, focusing on creating clear and seamless interfaces through elements like color, typography, and imagery.",
    link: "https://www.coursera.org/account/accomplishments/verify/YVYFJQYDXHGN"
  },
    {
    id: "course-5",
    year: "2022",
    title: "IBM - Data Analysis and Visualization Foundations",
    content: "Covered Data Analytics, Excel Basics, Data Visualization, Dashboards with Excel and Cognos, and Assessment for Data Analysis and Visualization Foundations.",
    link: "https://www.coursera.org/account/accomplishments/specialization/K7DVB8ZUFSZ7"
  },
  {
    id: "course-6",
    year: "started 2021",
    title: "Mimo - HTML5, JavaScript, Python, SQL",
    content: "Mimo, an intuitive programming app, facilitated learning through real-world projects in HTML, JavaScript, CSS, Python, and SQL.",
    link: "https://mimo.org"
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Her work ethic is second to none, consistently pushing for the best outcomes in every project.",
    source: "Linkedin Recommendation",
    name: "Natalie Morgan",
    title: "Andrea's Team Leader at Advance Metrics AG",
    linkedin: "https://www.linkedin.com/in/natalie-morgan",
    img: natalia_morgan,
  },
  {
    id: "feedback-2",
    content:
      "Her technical skills extended beyond programming to include the use of modern development tools and platforms. She demonstrated a quick and strong grasp of concepts and used technical tools with great efficiency..",
    source: "Recommendation Letter",
    name: "Wolfram Schmidt",
    title: "Andrea's Direct Supervisor and CEO of Phamos GmbH",
    linkedin: "https://www.linkedin.com/in/wolfram-schmidt-894790158",
    img: wolfram_schmidt,
  },
  {
    id: "feedback-3",
    content:
      "She has a keen sense for high-quality content marketing, both in terms of overarching strategies and operational implementation.",
    source: "LinkedIn Recommendation",
    name: "Noe Tondeur",
    title: "Andrea's Professor at SAWI Academy Zurich",
    linkedin: "https://www.linkedin.com/in/noe-tondeur/",
    img: noe_toneur,
  }
];

export const languages = [
  {
    id: "language-1",
    logo: html,
    name: "HTML"
  },
  {
    id: "language-2",
    logo: css,
    name: "CSS"
  },
  {
    id: "language-3",
    logo: js,
    name: "JavaScript"
  },
  {
    id: "language-4",
    logo: python,
    name: "Python"
  },
  {
    id: "language-5",
    logo: react,
    name: "React"
  },
  {
    id: "language-6",
    logo: django,
    name: "Django"
  },
    {
    id: "language-7",
    logo: c,
    name: "C"
  },
  {
    id: "language-8",
    logo: sql,
    name: "SQL"
  },
  {
    id: "language-10",
    logo: flask,
    name: "Flask"
  },
  {
    id: "language-9",
    logo: mariadb,
    name: "MariaDB"
  },
];


export const tools = [
  {
    id: "tool-1",
    logo: jira,
    name: "Jira"
  },
  {
    id: "tool-2",
    logo: confluence,
    name: "Confluence"
  },
  {
    id: "tool-3",
    logo: vscode,
    name: "VSCode"
  },
  {
    id: "tool-4",
    logo: figma,
    name: "Figma"
  },
    {
    id: "tool-5",
    logo: github,
    name: "GitHub"
  },
    {
    id: "tool-6",
    logo: wordpress,
    name: "Wordpress"
  },
    {
    id: "tool-7",
    logo: magento,
    name: "Magento"
  },
    {
    id: "tool-8",
    logo: gitlab,
    name: "GitLab"
  },
    {
    id: "tool-9",
    logo: frappe,
    name: "Frappe"
  },
    {
    id: "tool-10",
    logo: obsidian,
    name: "Obsidian"
  },
    {
    id: "tool-11",
    logo: webflow,
    name: "Webfolw"
  },
    {
    id: "tool-12",
    logo: docker,
    name: "Docker"
  },
];
