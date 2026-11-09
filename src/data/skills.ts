import { Skill, SkillCategory } from "@/types";

// ============================================================================
// Individual Skills
// ============================================================================

const programmingSkills: Skill[] = [
  {
    name: "C++",
    category: "programming",
    description:
      "Building foundational programming skills through structured problem-solving and algorithmic thinking.",
    level: "Foundations",
  },
  {
    name: "Python",
    category: "programming",
    description:
      "Exploring scripting, automation, and general-purpose programming with Python.",
    level: "Foundations",
  },
];

const computerScienceSkills: Skill[] = [
  {
    name: "Data Structures",
    category: "computer-science",
    description:
      "Studying core data structures such as arrays, linked lists, stacks, queues, and trees.",
    level: "Exploring",
  },
];

const softwareDatabaseSkills: Skill[] = [
  {
    name: "Application Software Concepts",
    category: "software-database",
    description:
      "Understanding how application software is designed, structured, and used across domains.",
    level: "Exploring",
  },
  {
    name: "SQL",
    category: "software-database",
    description:
      "Learning relational database querying and data management fundamentals.",
    level: "Foundations",
  },
];

const complementarySkills: Skill[] = [
  {
    name: "Marketing / Professional Insight",
    category: "complementary",
    description:
      "Developing an understanding of marketing principles and professional communication.",
    level: "Exploring",
  },
];

// ============================================================================
// Skill Categories (grouped for section display)
// ============================================================================

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    description:
      "Core programming languages forming the foundation of software development skills.",
    skills: programmingSkills,
  },
  {
    id: "computer-science",
    label: "Computer Science",
    description:
      "Fundamental computer science concepts and theoretical knowledge.",
    skills: computerScienceSkills,
  },
  {
    id: "software-database",
    label: "Software & Database",
    description:
      "Application software understanding and database management fundamentals.",
    skills: softwareDatabaseSkills,
  },
  {
    id: "complementary",
    label: "Complementary",
    description:
      "Cross-disciplinary skills that complement technical expertise.",
    skills: complementarySkills,
  },
];

/** Flat array of all skills across every category */
export const allSkills: Skill[] = skillCategories.flatMap(
  (category) => category.skills
);
