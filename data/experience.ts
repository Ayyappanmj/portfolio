export interface ExperienceItem {
  id: string;
  role: string; // Official internship title kept as fact
  company: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  certificate?: string;
  certificateId?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  score: string;
  details?: string;
}

export const educationList: EducationItem[] = [
  {
    id: "btech-it",
    degree: "Bachelor of Technology in Information Technology",
    institution: "University College of Engineering, Kariyavattom, Kerala",
    duration: "October 2022 – 2026",
    score: "CGPA: 7.5",
    details: "Core coursework: Data Structures, Database Management Systems, Operating Systems, Computer Networks, Object-Oriented Design, and Software Systems Architecture.",
  },
  {
    id: "class-xii",
    degree: "Senior Secondary (Class XII)",
    institution: "TMGHSS Perignad, Adoor, Kerala",
    duration: "2021 – 2022",
    score: "Percentage: 91.7%",
  },
  {
    id: "class-x",
    degree: "Secondary (Class X)",
    institution: "CBMHSS Noornad, Kerala",
    duration: "2019 – 2020",
    score: "Percentage: 95%",
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "junior-python-intern",
    role: "Junior Python Developer Intern",
    company: "Yuva Intern",
    duration: "Sep 2026 – Oct 2026 (6 weeks)",
    summary:
      "6-week technical internship focused on modular software architecture, automated testing suites, and continuous integration workflows.",
    responsibilities: [
      "Built modular Python CLI applications using object-oriented principles, robust input validation, and structured error handling.",
      "Developed automated unit and integration test suites using pytest and TDD methodologies to validate boundary conditions.",
      "Profiled runtime bottlenecks using cProfile and timeit, optimizing operational execution speed.",
      "Configured automated GitHub Actions CI workflows enforcing automated linting, tests, and quality standards on push.",
    ],
    skills: ["Python", "Pytest", "TDD", "cProfile", "GitHub Actions", "OOP"],
  },
  {
    id: "data-analyst-intern",
    role: "Data Analyst Intern",
    company: "Yuva Intern",
    // TODO: Confirm exact 8-week dates. Previously listed as "Sep 2026" alongside the 6-week Python internship. Estimated as Jul 2026 – Aug 2026.
    duration: "Jul 2026 – Aug 2026 (8 weeks)",
    summary:
      "8-week data analysis internship centered on exploratory data processing, data cleaning pipelines, and business intelligence dashboards.",
    responsibilities: [
      "Conducted exploratory data analysis (EDA) across multi-dimensional datasets using Python, Pandas, and NumPy to extract statistical distributions.",
      "Engineered automated cleaning pipelines to systematically resolve missing values, duplicate records, and schema mismatches.",
      "Built interactive Power BI dashboards and visual reports translating complex datasets into clear operational insights.",
    ],
    skills: ["Python", "Pandas", "NumPy", "Power BI", "Data Cleaning", "EDA"],
  },
  {
    id: "yip-intern",
    role: "Young Innovators Programme 6.0 – Intern",
    company: "K-DISC & GTech, Government of Kerala",
    duration: "January 2024 – March 2024 (2 months)",
    summary:
      "Two-month innovation fellowship addressing real-world problem statements through collaborative technical prototypes and applied engineering.",
    responsibilities: [
      "Completed a structured two-month innovation internship under the GTech initiative focusing on emerging technologies.",
      "Collaborated in cross-functional teams to design, iterate, and evaluate working software prototypes.",
      "Awarded Certificate of Appreciation (Certificate ID: µ2024032145) in recognition of technical contributions.",
    ],
    skills: ["System Prototyping", "Technical Problem Solving", "Emerging Tech"],
    certificate: "/certificates/yip-internship.jpg",
    certificateId: "µ2024032145",
  },
];
