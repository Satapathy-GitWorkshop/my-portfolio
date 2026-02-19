export const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export const stackPills = [
  'Java', 'Spring Boot', 'Microservices', 'AWS',
  'Python', 'LLMs / RAG', 'Docker', 'Kubernetes', 'React + Vite', 'CI/CD',
]

export const facts = [
  { num: '4+', label: 'Repositories' },
  { num: '20+', label: 'Technologies' },
  { num: '∞', label: 'Curiosity' },
]

export const aboutRows = [
  { key: '// role',          val: 'Software Developer' },
  { key: '// company',       val: 'Infosys' },
  { key: '// location',      val: 'Bhubaneswar, Odisha 🇮🇳' },
  { key: '// core_stack',    val: 'Java · Spring Boot · Microservices · AWS' },
  { key: '// portfolio_stack', val: 'React · Vite · CSS Modules' },
  { key: '// learning',      val: 'AI · Deep Learning · LLMs' },
  { key: '// open_to',       val: 'AI Collaborations' },
  { key: '// email',         val: 'saurav.satpathy98@gmail.com' },
]

export const skills = [
  {
    icon: '☕', title: 'Languages',
    items: ['Java', 'Python', 'JavaScript'],
  },
  {
    icon: '🌱', title: 'Backend',
    items: ['Spring Boot', 'Spring', 'Microservices', 'FastAPI', 'Node.js', 'JWT', 'REST APIs'],
  },
  {
    icon: '⚛️', title: 'Frontend',
    items: ['React', 'React Native', 'Redux', 'Vite', 'Bootstrap', 'CSS Modules', 'HTML5'],
  },
  {
    icon: '☁️', title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD'],
  },
  {
    icon: '🗄️', title: 'Databases',
    items: ['MySQL', 'MongoDB', 'MariaDB', 'SQLite', 'DynamoDB'],
  },
  {
    icon: '🛠️', title: 'Tools',
    items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Postman', 'SonarQube', 'Swagger', 'Apache Maven', 'Tomcat', 'Figma', 'Canva'],
  },
]

export const experience = [
  {
    date: 'Current · Infosys',
    role: 'Software Developer',
    company: 'Infosys — Bhubaneswar, India',
    desc: 'Building and maintaining enterprise-grade backend applications with Java and Spring Boot. Designing scalable REST APIs, implementing JWT security, managing AWS cloud deployments, and orchestrating containers with Docker & Kubernetes. Using Jenkins and GitHub Actions for CI/CD, and enforcing code quality with SonarQube and Swagger-documented APIs.',
    tags: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'MySQL', 'JWT'],
  },
  {
    date: 'February 2022 – February 2024',
    role: 'Fullstack Java Developer',
    company: 'TeckValley India Pvt. Ltd.',
    desc: 'Delivered diverse high-impact projects, specializing in building scalable React applications and robust Java backend systems. Focused on optimizing performance and gathering deep technical insights to solve complex problems, ensuring high-quality, end-to-end solutions that meet modern business needs.',
    tags: ['Java', 'Spring Boot & Microservices', 'MongoDB', 'SQL', 'ReactJS', 'NodeJs', 'HTML', 'CSS', 'JavaScript', 'AWS'],
  },
  {
    date: 'February 2021 – February 2022',
    role: 'Java Developer',
    company: 'TechnoLabs Software Pvt Ltd.',
    desc: 'Developed robust Java backend services for a high-performance POS system, seamlessly integrated with an Angular frontend. Optimized SQL queries to ensure rapid transaction processing and leveraged Docker and AWS for streamlined deployment. Collaborated in Agile teams to deliver scalable billing and payment solutions tailored for reliability.',
    tags: ['Java', 'Spring Boot & Microservices', 'SQL', 'Jenkins', 'Git', 'AWS'],
  },
  {
    date: 'Ongoing · Open Source',
    role: 'AI & LLM Explorer',
    company: 'Personal Projects & Open Source',
    desc: 'Deep-diving into AI model building and LLM application development. Contributing to the awesome-llm-apps repository — a curated collection of AI Agent and RAG pipeline applications using OpenAI, Anthropic Claude, Gemini, and open-source models.',
    tags: ['Python', 'LLMs', 'RAG', 'OpenAI', 'Anthropic', 'Gemini', 'Neural Nets'],
  },
]

export const projects = [
  {
    num: '001',
    name: 'My Portfolio Website',
    short: 'A fully responsive portfolio built with React and Vite. Features dark/light mode, flip card project animations, modular components, and CSS Modules scoped styling.',
    tech: 'React · Vite · CSS Modules · HTML5',
    backTitle: 'My Portfolio',
    backDesc: 'Tech: React + Vite. Features: 🎨 Light/Dark theme toggle · 🎬 Flip card animations · 📱 Fully responsive · 🧩 Components: Navbar, Header, Projects, Experience, Footer · CSS Modules for style isolation · Font Awesome icons · Social media links · Resume CTA · 10 commits, actively maintained.',
    backTech: 'CSS 50% · JS 48% · HTML 2%',
    link: 'https://github.com/Satapathy-GitWorkshop/my-portfolio',
    linkLabel: 'GitHub ↗',
  },
  {
    num: '002',
    name: 'Awesome LLM Apps',
    short: 'A curated collection of LLM-powered applications featuring AI Agents and RAG pipelines using OpenAI, Anthropic Claude, Gemini, and open-source models.',
    tech: 'Python · LLMs · RAG · AI Agents',
    backTitle: 'Awesome LLM Apps',
    backDesc: 'Forked from Shubhamsaboo/awesome-llm-apps. A continuously growing library of practical LLM applications demonstrating Retrieval-Augmented Generation (RAG) and AI Agent patterns. Covers OpenAI, Anthropic Claude, Google Gemini, and open-source models in real-world use cases.',
    backTech: 'Python · OpenAI · Anthropic · Gemini',
    link: 'https://github.com/Satapathy-GitWorkshop/awesome-llm-apps',
    linkLabel: 'GitHub ↗',
  },
  {
    num: '003',
    name: 'Dev Icons Library',
    short: 'A personal static image repository of developer technology icons. Used as a lightweight CDN for rendering consistent, high-quality tech badges across applications.',
    tech: 'Static Assets · GitHub CDN',
    backTitle: 'Dev Icons Library',
    backDesc: 'A utility repository of developer and technology icons stored as static images. Referenced directly from GitHub in React and web apps to render consistent tech badges and logos without relying on external icon services or npm dependencies.',
    backTech: 'Static · PNG · SVG',
    link: 'https://github.com/Satapathy-GitWorkshop/Dev_Icons',
    linkLabel: 'GitHub ↗',
  },
  {
    num: '004',
    name: 'Enterprise Microservices',
    short: 'Production-grade Spring Boot microservices at Infosys — JWT-secured REST APIs, Swagger docs, Docker containers, Kubernetes orchestration, AWS hosting, and Jenkins CI/CD.',
    tech: 'Java · Spring Boot · K8s · AWS',
    backTitle: 'Enterprise Microservices',
    backDesc: 'Architecture: JWT-secured REST endpoints · OpenAPI/Swagger docs · Docker containerization · Kubernetes service mesh · AWS cloud hosting · Jenkins + GitHub Actions CI/CD · MySQL & MongoDB stores · SonarQube code quality gates · Apache Maven builds · Tomcat deployment.',
    backTech: 'Java · Spring · Docker · AWS',
    link: 'https://github.com/Satapathy-GitWorkshop',
    linkLabel: 'Profile ↗',
  },
]

export const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:saurav.satpathy98@gmail.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/saurav-satpathy-612ba21a3',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Satapathy-GitWorkshop',
    icon: 'github',
  },
]
