import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaStar,
  FaCertificate,
  FaToolbox,
} from "react-icons/fa6";
import { projects } from "./projects";
import { certificates } from "./certificates";
import { experiences } from "./experience";

export const profile = {
  name: "Ayyappan M",
  identity: "B.Tech Information Technology, 2026 · Kerala, India",
  headline: "Hi, I'm Ayyappan M",
  intro:
    "I build software, data pipelines, AI apps and infrastructure, and ship them with tests and CI.",
  location: "Kerala, India",
  avatar: "/avatar1.png",
  email: "ayyappanmadhuj@gmail.com",
  phone: "+91 9400802451",
  availability: "Open to opportunities",
  socials: [
    { label: "GitHub", href: "https://github.com/Ayyappanmj", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ayyappanmj", icon: FaLinkedin },
  ],
};

// Section order specified in Step 1 #3: Home, About, Projects, Experience, Skills, Certifications, Contact
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

// Computed dynamically from data arrays, removing "Core Skills Mastered"
export const achievements = [
  { value: projects.length, label: "Engineered Projects", icon: FaStar, suffix: "+" },
  { value: experiences.length, label: "Internships Completed", icon: FaToolbox, suffix: "" },
  { value: certificates.length, label: "Verified Credentials", icon: FaCertificate, suffix: "+" },
];

export { projects } from "./projects";
export { certificates } from "./certificates";
export { experiences, educationList } from "./experience";
export { skillGroups } from "./skills";
