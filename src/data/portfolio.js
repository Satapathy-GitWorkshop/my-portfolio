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
]

export const projects = [
  {
    num: '001',
    name: 'My Portfolio Website',
    short: 'A fully responsive portfolio built with React and Vite. Features dark/light mode, flip card project animations, modular components, and CSS Modules scoped styling.',
    tech: 'React · Vite · CSS Modules · HTML5',
    backTitle: 'My Portfolio',
    backDesc: 'React + Vite portfolio with dark/light mode, flip animations, responsive design, modular components, and CSS Modules.',
    backTech: 'React . CSS · HTML ',
    link: 'https://github.com/Satapathy-GitWorkshop/my-portfolio',
    linkLabel: 'GitHub ↗',
  },
  {
  num: '002',
  name: 'CodeReviewer',
  short: 'AI-powered code analytics platform that reviews GitHub commits and generates insights using static analysis and AI.',
  tech: 'Java · AI · Static Analysis . Docker . React · Vite · CSS · HTML5',
  backTitle: 'CodeReviewer',
  backDesc: 'Features: 🤖 AI-generated code reviews · 📊 Static code analysis · 🔍 GitHub commit insights · ⚡ Automated feedback using Groq API.',
  backTech: 'Java · AI APIs . React' ,
  link: 'https://github.com/Satapathy-GitWorkshop/CodeReviewer',
  linkLabel: 'GitHub ↗',
},
{
  num: '003',
  name: 'Email Subscription Manager',
  short: 'Unified Gmail & Outlook subscription manager to scan, categorize and unsubscribe using AI.',
  tech: 'Java · SpringBoot . Email APIs · AI . Docker . React · Vite · CSS · HTML5',
  backTitle: 'Email Manager',
  backDesc: 'Features: 📩 Scan inbox subscriptions · 🧠 AI categorization · 🚫 One-click unsubscribe · 🔗 Works across Gmail & Outlook.',
  backTech: 'Java · APIs . React',
  link: 'https://github.com/Satapathy-GitWorkshop/email-subscription-manager',
  linkLabel: 'GitHub ↗',
},
{
  num: '004',
  name: 'TrafficLens',
  short: 'Website analytics platform to track visitor behavior using a single JS snippet.',
  tech: 'Java . SpringBoot . React · Analytics ',
  backTitle: 'TrafficLens',
  backDesc: 'Features: 📈 Real-time dashboards · 📊 Historical insights · 🧭 Visitor tracking · ⚡ Lightweight integration.',
  backTech: 'Java. React · Tracking',
  link: 'https://github.com/Satapathy-GitWorkshop/TrafficLens',
  linkLabel: 'GitHub ↗',
},
{
  num: '005',
  name: 'WeatherMatrix',
  short: 'Smart weather analytics dashboard with AQI, hourly forecasts and historical trends.',
  tech: 'Java . SpringBoot . React · APIs',
  backTitle: 'WeatherMatrix',
  backDesc: 'Features: 🌍 Multi-city tracking · 🌫️ AQI monitoring · ⏱️ Hourly forecast · 📊 Past trends.',
  backTech: 'Java . Spring . JS · Weather APIs',
  link: 'https://github.com/Satapathy-GitWorkshop/WeatherMatrix',
  linkLabel: 'GitHub ↗',
},
{
  num: '006',
  name: 'PDFBuddy',
  short: 'Modern PDF toolkit inspired by iLovePDF with 22 tools in a clean UI.',
  tech: 'React · Vite · CSS Modules · HTML5',
  backTitle: 'PDFBuddy',
  backDesc: 'Features: 📄 22 PDF tools · 🔄 Convert, merge, split · 🎨 Modern UI · ⚡ Fast browser processing.',
  backTech: 'JS · File APIs',
  link: 'https://github.com/Satapathy-GitWorkshop/PDFBuddy',
  linkLabel: 'GitHub ↗',
},
{
    num: '007',
    name: 'Enterprise Microservices',
    short: 'Production-grade Spring Boot microservices with JWT security, Docker, Kubernetes, AWS, and CI/CD.',
    tech: 'Java · Spring Boot · K8s · AWS',
    backTitle: 'Enterprise Microservices',
    backDesc: 'JWT-secured APIs · Swagger docs · Docker & Kubernetes · AWS hosting · CI/CD · MySQL & MongoDB.',
    backTech: 'Java · Spring · Docker · AWS',
    
    linkLabel: 'Profile ↗',
  },
{
    num: '008',
    name: 'Awesome LLM Apps',
    short: 'LLM-powered apps using AI Agents and RAG with OpenAI, Claude, Gemini, and open-source models.',
    tech: 'Python · LLMs · RAG · AI Agents',
    backTitle: 'Awesome LLM Apps',
    backDesc: 'Forked LLM app collection showcasing RAG and AI Agent patterns using OpenAI, Claude, Gemini, and open-source models.',
    backTech: 'Python · OpenAI · Anthropic · Gemini',
    link: 'https://github.com/Satapathy-GitWorkshop/awesome-llm-apps',
    linkLabel: 'GitHub ↗',
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
