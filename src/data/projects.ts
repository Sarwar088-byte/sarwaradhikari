import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "cpp-dsa-toolkit",
    title: "C++ Data Structures & Algorithms Toolkit",
    description:
      "A modular, well-documented C++ implementation of foundational data structures and classical algorithms with performance benchmarks.",
    longDescription:
      "Engineered from scratch to master memory management, pointers, and time complexities. Includes custom implementations of Binary Search Trees, Heaps, AVL Trees, Graph traversal algorithms (BFS, DFS, Dijkstra), and sorting algorithms with Big-O execution analysis.",
    techStack: [
      { name: "C++20" },
      { name: "STL" },
      { name: "Data Structures" },
      { name: "Algorithms" },
    ],
    category: "Systems & Algorithms",
    githubUrl: "https://github.com/Sarwar088-byte",
    featured: true,
    status: "Active",
    highlights: [
      "Custom templated data structures with zero external dependencies",
      "Explicit memory allocation and pointer-safety patterns",
      "Empirical benchmark comparisons against standard library containers",
    ],
  },
  {
    id: "student-management-system",
    title: "Student Record & Academic Management System",
    description:
      "A robust application designed to manage student profiles, course enrollments, grade calculations, and persistent file records.",
    longDescription:
      "Developed to solve real academic administrative workflows. Features structured record querying, search filters by semester/GPA, CSV/binary file persistence, and thorough input validation to prevent corrupted entries.",
    techStack: [
      { name: "Python" },
      { name: "SQL" },
      { name: "File I/O" },
      { name: "Data Validation" },
    ],
    category: "Application Software",
    githubUrl: "https://github.com/Sarwar088-byte",
    featured: true,
    status: "Completed",
    highlights: [
      "Full CRUD lifecycle with relational querying and indexing",
      "Input sanitization preventing edge-case data invalidation",
      "Modular architecture separating storage logic from presentation",
    ],
  },
  {
    id: "javtech-platform",
    title: "JavTech Responsive Web Platform",
    description:
      "A modern, high-performance responsive web portal engineered with semantic HTML5, modular CSS, and accessible interface design.",
    longDescription:
      "Designed and deployed to provide a clean digital presence with fast load speeds, cross-browser compatibility, and mobile-first responsive layout without heavy framework overhead.",
    techStack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Cloudflare Pages" },
    ],
    category: "Web Engineering",
    githubUrl: "https://github.com/Sarwar088-byte/javtech",
    liveUrl: "https://sarwarahikari.pages.dev",
    featured: true,
    status: "Completed",
    highlights: [
      "Sub-second load times with pure vanilla web technologies",
      "100% responsive grid and flexbox layout across mobile, tablet, and desktop",
      "WCAG accessibility standards with semantic structure and keyboard navigation",
    ],
  },
  {
    id: "interactive-game-prototype",
    title: "2D Interactive Physics & Game Prototype",
    description:
      "An interactive game prototype exploring real-time game loops, physics simulations, sprite rendering, and collision dynamics.",
    longDescription:
      "Built to explore the mechanics behind interactive media and simulation software. Features custom bounding-box collision detection, state machine management for gameplay stages, and responsive keyboard controls.",
    techStack: [
      { name: "Python" },
      { name: "Pygame" },
      { name: "2D Physics" },
      { name: "State Machines" },
    ],
    category: "Interactive Computing",
    githubUrl: "https://github.com/Sarwar088-byte",
    featured: true,
    status: "Active",
    highlights: [
      "Fixed time-step game loop ensuring consistent physics across framerates",
      "Modular component architecture for player, enemies, and environment entities",
      "AABB collision resolution and score state tracking",
    ],
  },
];
