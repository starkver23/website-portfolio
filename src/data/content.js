// Single source of truth for all portfolio copy.
// Facts come from the CV (public/Aryan_Verma_CV.pdf). Do not add metrics or
// responsibilities that are not in it.

// Served from public/, so it works under any Vite base path.
const cvUrl = `${import.meta.env.BASE_URL}Aryan_Verma_CV.pdf`;

export const profile = {
  name: "Aryan Verma",
  firstName: "Aryan",
  lastName: "Verma",
  roles: ["Software Engineer", "Full-Stack Developer", "Computer Science Postgraduate"],
  intro:
    "I'm a Computer Science postgraduate from the University of Birmingham who enjoys building practical software solutions, exploring backend engineering and solving real-world problems through technology.",
  location: "Birmingham, UK",
  availability: "Open to graduate & junior roles",
  cv: cvUrl,
  email: "aryanverma2035@gmail.com",
  github: "https://github.com/starkver23",
  linkedin: "https://www.linkedin.com/in/aryan-verma-soft-dev",
  portfolio: "https://www.vermacodes.me",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I studied Computer Science and Engineering at Manipal University Jaipur, spent a semester abroad at VSB – Technical University of Ostrava, and went on to an MSc in Advanced Computer Science at the University of Birmingham.",
    "Along the way I've done four technical internships: frontend development for an aviation booking platform, backend training in Python/Django and Node.js, an applied machine-learning project, and React and Spring Boot work at Cognizant.",
    "Most of what I build starts with a problem I actually have, like tracking job applications without handing my inbox to a third party, or pulling scattered job listings into one ranked view.",
  ],
  interests: [
    "Software Engineering",
    "Backend Development",
    "Full-Stack Development",
    "Application Architecture",
    "Distributed Systems",
    "Problem Solving",
  ],
  facts: [
    { label: "Based in", value: "Birmingham, UK" },
    { label: "Focus", value: "Backend & full-stack engineering" },
    { label: "Open to", value: "Graduate & junior software developer roles" },
  ],
};

export const experience = [
  {
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst Trainee",
    period: "Jul 2025 – Sep 2025",
    location: "Pune, India · On-site",
    type: "Trainee",
    points: [
      "Strengthened proficiency in Java, Spring Boot and React through instructor-led training and assessed coursework within a professional SDLC environment.",
      "Implemented features for an early-stage e-commerce platform using React and Spring Boot under manager supervision, before relocating to the UK for postgraduate study.",
    ],
    stack: ["Java", "Spring Boot", "React"],
  },
  {
    company: "ASR Aviation",
    role: "Frontend Developer",
    period: "Jan 2025 – May 2025",
    location: "Jaipur, India · Remote",
    type: "Internship",
    points: [
      "Delivered the frontend of an aviation booking platform supporting high-volume concurrent user sessions.",
      "Built 5+ core frontend modules, including flight booking, operator listings and administration dashboards, using reusable components to streamline internal development.",
      "Established secure, scalable AWS backend infrastructure and contributed to Agile testing, debugging and release cycles.",
    ],
    stack: ["React", "AWS"],
  },
  {
    company: "Zummit Infolabs",
    role: "Python/Django Intern",
    period: "Jul 2024 – Dec 2024",
    location: "Bengaluru, India · Remote",
    type: "Internship",
    points: [
      "Completed backend development training in Python/Django, Node.js, Express.js and RESTful API design.",
      "Gained exposure to microservices architecture, database integration and API testing through structured exercises and code reviews.",
    ],
    stack: ["Python", "Django", "Node.js", "Express.js"],
  },
  {
    company: "Celebal Technologies",
    role: "Data Science Intern",
    period: "May 2024 – Jul 2024",
    location: "Jaipur, India · Remote",
    type: "Internship",
    points: [
      "Developed a spam email detection system using data preprocessing, feature engineering and model training across Naive Bayes, SVM, Random Forest, Gradient Boosting and CNN.",
      "Achieved 92% classification accuracy against an 82% target benchmark through systematic model evaluation and selection.",
      "Deployed the final solution as a functional Python pipeline using scikit-learn and pandas.",
    ],
    stack: ["Python", "scikit-learn", "pandas"],
  },
];

export const featuredProjects = [
  {
    id: "codeclassroom",
    title: "CodeClassroom",
    kind: "Full-stack platform",
    summary:
      "A full-stack visual domain modelling platform that extends JHipster's domain language through a custom compiler, supporting visual modelling and application code generation.",
    highlights: [
      { title: "Custom compiler", text: "Built on top of JHipster, extending its domain language to support object-oriented programming patterns beyond native JDL capabilities." },
      { title: "Visual modelling", text: "A visual modelling environment that simplifies the creation of design patterns." },
      { title: "Code generation", text: "Compiles visual models into application-ready code. Both the frontend and backend are deployed live." },
    ],
    stack: ["React", "TypeScript", "CSS", "Spring Boot", "JHipster", "JDL"],
    links: [
      { label: "Visit project", href: "https://dpa.shah.fyi" },
      { label: "GitHub", href: "https://github.com/starkver23/DPA" },
    ],
  },
  {
    id: "job-tracker",
    title: "Personal Job Tracker",
    kind: "Local-first web app",
    summary:
      "A privacy-focused, browser-only application for tracking job applications. Everything lives in the browser. There is no backend and no hosted database.",
    highlights: [
      { title: "Local-first storage", text: "Applications are stored in IndexedDB through Dexie, so data never leaves the user's device." },
      { title: "No backend at all", text: "No server and no hosted database to run or secure. A GitHub Actions workflow deploys the static build to GitHub Pages." },
      { title: "Read-only Gmail, your own client", text: "Optional Gmail integration requests read-only OAuth scope and runs on the user's own Google OAuth client." },
      { title: "Explainable classifier", text: "A deterministic, rules-based classifier maps emails to application stages, so every decision can be explained. It is unit-tested with Vitest." },
    ],
    stack: ["React 18", "TypeScript", "Vite", "IndexedDB", "Dexie", "Gmail API", "Google OAuth", "Vitest"],
    links: [{ label: "GitHub", href: "https://github.com/starkver23/personal-job-tracker" }],
  },
  {
    id: "job-radar",
    title: "Job Radar",
    kind: "Aggregation dashboard",
    summary:
      "A personal job-search dashboard that collects entry-level software engineering opportunities from several sources into one ranked view. Built to solve a real problem: relevant listings were scattered across many separate boards.",
    highlights: [
      { title: "Many sources, one view", text: "Aggregates listings from JSearch, Adzuna and Reed, plus Greenhouse and Lever company career feeds." },
      { title: "Three markets", text: "Searches across the UK, India and the Czech Republic." },
      { title: "Preference ranking", text: "Results are ranked against configurable personal preferences." },
      { title: "Keys stay secret", text: "API keys live in environment variables behind a Vite development proxy, never in the client bundle." },
      { title: "Optional deployment", text: "Can run as password-protected Netlify Functions." },
      { title: "Search routines", text: "Ships with job-board references and structured search routines." },
    ],
    stack: ["React", "Vite", "JSearch", "Adzuna", "Reed", "Greenhouse", "Lever", "Netlify Functions"],
    links: [],
  },
];

export const otherProjects = [
  {
    title: "SwopIt",
    summary: "An AI-enabled marketplace for university students to buy and sell items within campus. In active development.",
    stack: ["Spring Boot", "React", "PostgreSQL", "AWS"],
    status: "In development",
    href: null,
  },
  {
    title: "Self-Driving Car Prototype",
    summary: "A miniature autonomous vehicle with real-time obstacle detection and avoidance, using ultrasonic sensors and C++ firmware for navigation and steering.",
    stack: ["Arduino", "C/C++", "Ultrasonic sensors"],
    status: "Hardware",
    href: "https://github.com/starkver23/Self-Driving-Car",
  },
  {
    title: "Savings Goal Tracker",
    summary: "An interactive savings tracker with visual analytics. Placed 3rd of 50 teams across three rounds of an IEEE university challenge.",
    stack: ["React", "Chart.js", "Tailwind CSS"],
    status: "IEEE · 3rd place",
    href: "https://do-it-kappa-five.vercel.app/",
  },
  {
    title: "Optimised Clinic Appointment System",
    summary: "Scheduling logic with robust edge-case handling to reduce booking errors and keep concurrent sessions reliable on AWS infrastructure.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    status: "Full-stack",
    href: null,
  },
];

export const skills = [
  { category: "Programming", items: ["Python", "Java", "JavaScript", "TypeScript"] },
  { category: "Frameworks", items: ["Spring Boot", "Node.js", "React", "Django"] },
  { category: "Web", items: ["HTML", "CSS"] },
  { category: "Cloud & databases", items: ["AWS (EC2, S3)", "PostgreSQL", "MySQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Postman", "Selenium", "Docker"] },
  {
    category: "Core concepts",
    items: ["REST APIs", "Microservices", "SQL & NoSQL", "Debugging", "System Integration", "CI/CD", "Agile/SDLC"],
  },
  { category: "Embedded / IoT", items: ["Arduino", "Ultrasonic Sensors", "RF Modules", "Bluetooth", "C++ Firmware"] },
];

export const education = [
  {
    years: "2025–26",
    degree: "MSc Advanced Computer Science",
    institution: "University of Birmingham",
    place: "Birmingham, UK",
    period: "Sep 2025 – Oct 2026",
    notes: ["Merit"],
    modules: "Computer Vision, Human-Computer Interaction, Secure Systems, Intelligent Interactive Systems, Intelligent Software Engineering",
  },
  {
    years: "2025",
    degree: "Semester Exchange Programme",
    institution: "VSB – Technical University of Ostrava",
    place: "Ostrava, Czech Republic",
    period: "Mar 2025 – Jun 2025",
    notes: ["GPA 4.0/4.0"],
  },
  {
    years: "2021–25",
    degree: "BTech (Hons.) Computer Science & Engineering",
    institution: "Manipal University Jaipur",
    place: "Jaipur, India",
    period: "Aug 2021 – Jul 2025",
    notes: ["Specialisation: IoT & IS", "CGPA 8.19", "Dean's List Excellency Award, 7th semester"],
    modules: "Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering",
  },
];

export const certifications = [
  { title: "The Complete Oracle SQL Bootcamp (2024)", issuer: "Udemy" },
  { title: "HackerRank SQL, 4-star badge", issuer: "HackerRank" },
  { title: "Python Bootcamp", issuer: "Udemy" },
  { title: "Web Developer Bootcamp 2024", issuer: "Udemy" },
  { title: "Foundations of Software Testing and Validation", issuer: "Coursera" },
  { title: "Selenium WebDriver with Java", issuer: "Coursera" },
];
