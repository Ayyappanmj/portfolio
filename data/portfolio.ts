import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaLinkedinIn,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaReact,
  FaNode,
  FaDatabase,
  FaCloud,
  FaToolbox,
  FaCertificate,
  FaStar
} from "react-icons/fa6";

export const profile = {
  name: "AYYAPPAN M",
  title: "IT Undergraduate | Full Stack Developer",
  location: "Kerala, India",
  intro:
    "Motivated IT undergraduate with a strong foundation in programming, web technologies, data analytics, and AI/ML. Experienced in real-world innovation through government internships and technical workshops on cloud and IoT.",
  avatar: "/avatar.png",
  resume: "/resume.pdf",
  email: "ayyappanmadhuj@gmail.com",
  phone: "+91 9400802451",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
    { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
    { label: "GitHub", href: "https://github.com", icon: FaGithub },
  ],
};

export const typingRoles = [
  "IT Developer",
  "AI/ML Enthusiast",
  "Data Analytics Expert",
  "Full Stack Developer",
];

export const techIcons = [FaReact, FaNode, FaDatabase, FaCloud, FaToolbox];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const aboutTimeline = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Technology in IT",
    description: "University College of Engineering, Kariyavattom, Kerala. CGPA: 7.5",
  },
  {
    year: "2021 - 2022",
    title: "Senior Secondary (Class XII)",
    description: "TMGHSS Perignad, Adoor, Kerala. Percentage: 91.7%",
  },
  {
    year: "2019 - 2020",
    title: "Secondary (Class X)",
    description: "CBMHSS Noornad, Kerala. Percentage: 95%",
  },
];

export const achievements = [
  { value: 3, label: "Projects Completed", icon: FaStar, suffix: "" },
  { value: 10, label: "Skills Mastered", icon: FaCloud, suffix: "+" },
  { value: 2, label: "Certifications", icon: FaCertificate, suffix: "" },
  { value: 6, label: "Months Experience", icon: FaToolbox, suffix: "+" },
];

export const certifications = [
  {
    name: "Young Innovators Programme 6.0 – Certificate of Appreciation",
    issuer: "K-DISC & GTech, Government of Kerala",
    verify: "Certificate ID: µ2024032145",
  },
  {
    name: "IoT with AWS – Certificate of Training",
    issuer: "Ragam 2023 Workshop Series, NIT Calicut (IEEE, NIT Calicut)",
    verify: "March 2023",
  },
];

export const experiences = [
  {
    role: "Young Innovators Programme 6.0 – Intern",
    company: "K-DISC & GTech, Government of Kerala",
    duration: "January 2024 — March 2024",
    responsibilities: [
      "Completed a structured two-month internship under the GTech initiative focused on innovation and emerging technology development.",
      "Collaborated on hands-on projects addressing real-world challenges, demonstrating initiative and technical problem-solving.",
      "Awarded an official Certificate of Appreciation (ID: µ2024032145) in recognition of dedication and contribution to the programme.",
    ],
  },
];

export const projects = [
  {
    title: "Next-Gen Edutech RAG-Based AI System",
    category: "AI/ML",
    description: "AI tools for automated question generation, summarization, and prediction using Retrieval-Augmented Generation (RAG) frameworks.",
    image: "/projects/project-1.jpg",
    technologies: ["Python", "RAG", "NLP", "TensorFlow"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Student Database Management System",
    category: "Database",
    description: "Robust relational databases for student data analysis and administrative reporting with advanced SQL features.",
    image: "/projects/project-2.jpg",
    technologies: ["SQL", "MySQL", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Sales Data Analysis",
    category: "Analytics",
    description: "Complex sales datasets analysis with interactive Power BI dashboards for data-driven decision-making.",
    image: "/projects/project-3.jpg",
    technologies: ["SQL", "MS Excel", "Power BI"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export const services = [
  {
    title: "Web Development",
    description: "End-to-end web applications, landing pages, and SaaS UI.",
  },
  {
    title: "Design Systems",
    description: "Reusable component libraries and scalable UI systems.",
  },
  {
    title: "Technical Consulting",
    description: "Architecture reviews, performance audits, and developer coaching.",
  },
];

export const skillGroups = [
  {
    category: "Programming Languages",
    icon: FaReact,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Web Development",
    icon: FaNode,
    skills: [
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Node.js", level: 75 },
      { name: "HTML5/CSS3", level: 90 },
    ],
  },
  {
    category: "Data & AI/ML",
    icon: FaCloud,
    skills: [
      { name: "Pandas/NumPy", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "Power BI", level: 80 },
      { name: "Scikit-learn", level: 78 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: FaToolbox,
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export const testimonials = [
  {
    name: "Maya Chen",
    role: "Product Lead",
    text: "The team was impressed by the clean architecture and polished UX.",
    image: "/testimonials/client-1.jpg",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Design Manager",
    text: "Excellent collaboration and delivery on a tight product schedule.",
    image: "/testimonials/client-2.jpg",
    rating: 5,
  },
];

export const heroHighlights = [
  "Next.js performance optimization",
  "Full stack architecture",
  "Design system development",
];
