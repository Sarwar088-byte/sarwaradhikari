import { JourneyMilestone } from "@/types";

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "btech-cse",
    type: "current",
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "Second Year Undergraduate",
    description:
      "Deepening computer science foundations with rigorous coursework in Data Structures, Object-Oriented Programming, Discrete Mathematics, and Relational Database Systems.",
    details: [
      "Implementing foundational data structures and algorithmic solutions in C++",
      "Analyzing algorithm time and space complexities (Big-O notation)",
      "Designing relational schemas and writing structured SQL queries",
    ],
  },
  {
    id: "peer-mentor",
    type: "role",
    title: "Academic Peer Mentor",
    subtitle: "University Peer Mentorship Program",
    description:
      "Selected to mentor first-year engineering undergraduates, facilitating weekly discussions, debugging assistance, and conceptual guidance in introductory programming.",
    details: [
      "Guided junior students through C/C++ programming concepts and logic development",
      "Held one-on-one debugging sessions to teach systematic problem isolation",
      "Fostered collaborative study environments to improve student retention and confidence",
    ],
  },
  {
    id: "systems-software",
    type: "foundation",
    title: "Programming & Systems Mastery",
    subtitle: "C++ & Python Core Competencies",
    description:
      "Focused deliberate practice on low-level memory concepts in C++ (pointers, memory lifecycle, STL) combined with rapid prototyping and automation scripting in Python.",
    details: [
      "Engineered command-line utilities and custom data container implementations",
      "Explored file I/O serialization and robust error handling patterns",
      "Built habits of clean code formatting, modularity, and readable documentation",
    ],
  },
  {
    id: "web-software",
    type: "learning",
    title: "Practical Software & Web Engineering",
    subtitle: "JavTech Project & Deployment Pipelines",
    description:
      "Translating academic theory into practical, user-facing applications. Engineered responsive web interfaces with semantic HTML, modern CSS, and cloud edge deployment.",
    details: [
      "Built and deployed the JavTech digital platform using Cloudflare Pages",
      "Adopted Git and GitHub for disciplined commit history and version tracking",
      "Explored cross-device responsive layout standards and accessibility best practices",
    ],
  },
  {
    id: "creative-computing",
    type: "interest",
    title: "Interactive Systems & Creative Computing",
    subtitle: "Game Mechanics & Future Exploration",
    description:
      "Exploring the engineering behind real-time interactive media, game loops, and simulation physics to bridge computational rigor with creative user experiences.",
    details: [
      "Prototyping 2D game loops and bounding-box collision detection",
      "Investigating state machine architecture for interactive simulations",
      "Staying curious about modern software paradigms and emerging technology",
    ],
  },
];
