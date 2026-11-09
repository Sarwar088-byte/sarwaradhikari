import { Skill, SkillCategory } from "@/types";

const programmingSkills: Skill[] = [
  {
    name: "C++",
    category: "programming",
    description: "Core object-oriented programming, memory management, pointers, and algorithmic problem solving.",
    level: "Intermediate",
  },
  {
    name: "Python",
    category: "programming",
    description: "Scripting, rapid application prototyping, automation, and algorithmic implementations.",
    level: "Intermediate",
  },
  {
    name: "SQL",
    category: "programming",
    description: "Relational schema design, normalization, complex querying, joins, and aggregations.",
    level: "Intermediate",
  },
  {
    name: "JavaScript / TypeScript",
    category: "programming",
    description: "Client-side interactivity, DOM manipulation, asynchronous programming, and typed web development.",
    level: "Foundational",
  },
  {
    name: "HTML5 & CSS3",
    category: "programming",
    description: "Semantic document structure, responsive layout techniques (Flexbox, Grid), and modern styling.",
    level: "Proficient",
  },
];

const computerScienceSkills: Skill[] = [
  {
    name: "Data Structures & Algorithms",
    category: "computer-science",
    description: "Arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and Big-O time complexity analysis.",
    level: "Core Academic Focus",
  },
  {
    name: "Object-Oriented Design (OOP)",
    category: "computer-science",
    description: "Encapsulation, inheritance, polymorphism, abstraction, and clean class modularity.",
    level: "Core Academic Focus",
  },
  {
    name: "Database Management (DBMS)",
    category: "computer-science",
    description: "Relational database models, entity-relationship diagrams, transactions, and indexing.",
    level: "Core Academic Focus",
  },
  {
    name: "Application Software Concepts",
    category: "computer-science",
    description: "Software architecture patterns, user interface workflows, and modular application design.",
    level: "Core Academic Focus",
  },
];

const toolingSkills: Skill[] = [
  {
    name: "Git & Version Control",
    category: "tooling",
    description: "Branching strategies, commit hygiene, merge resolution, and collaborative GitHub workflows.",
    level: "Proficient",
  },
  {
    name: "Linux & Command Line",
    category: "tooling",
    description: "Shell navigation, command chaining, build tools, package managers, and development environment setup.",
    level: "Working Knowledge",
  },
  {
    name: "VS Code & Development Tools",
    category: "tooling",
    description: "Code debugging, extensions, static analysis, and productive development configurations.",
    level: "Proficient",
  },
  {
    name: "Cloudflare Pages & Deployment",
    category: "tooling",
    description: "Continuous deployment pipelines, static site hosting, and modern edge CDN distribution.",
    level: "Working Knowledge",
  },
];

const mentorshipSkills: Skill[] = [
  {
    name: "Academic Peer Mentorship",
    category: "mentorship",
    description: "Guiding first-year engineering students through programming concepts, debugging, and academic growth.",
    level: "Active Role",
  },
  {
    name: "Technical Communication",
    category: "mentorship",
    description: "Breaking down complex computing concepts into clear, actionable explanations.",
    level: "Proficient",
  },
  {
    name: "Collaborative Problem Solving",
    category: "mentorship",
    description: "Working effectively with peers to debug logic errors and architect shared project solutions.",
    level: "Proficient",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Languages & Core Tech",
    description: "Programming languages used for systems, scripting, and applications.",
    skills: programmingSkills,
  },
  {
    id: "computer-science",
    label: "CS Fundamentals",
    description: "Foundational computer science principles, data structures, and architecture.",
    skills: computerScienceSkills,
  },
  {
    id: "tooling",
    label: "Tools & Workflow",
    description: "Modern developer tools, version control, and deployment pipelines.",
    skills: toolingSkills,
  },
  {
    id: "mentorship",
    label: "Mentorship & Collaboration",
    description: "Leadership, communication, and peer teaching abilities.",
    skills: mentorshipSkills,
  },
];

export const allSkills: Skill[] = skillCategories.flatMap(
  (category) => category.skills
);
