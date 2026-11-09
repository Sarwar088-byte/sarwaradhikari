import { Project } from "@/types";

// ============================================================================
// Projects
// ============================================================================
//
// To add a project, push an object matching the Project interface:
//
//   {
//     id: "my-project",                          // unique slug identifier
//     title: "My Project",                       // display title
//     description: "A short one-liner.",          // brief summary (1-2 sentences)
//     longDescription: "Extended details...",     // optional deep-dive paragraph
//     techStack: [                                // technologies used
//       { name: "Python" },
//       { name: "Flask" },
//     ],
//     category: "Web Development",               // project category label
//     imageUrl: "/projects/my-project.png",       // optional preview image path
//     liveUrl: "https://example.com",             // optional live demo link
//     githubUrl: "https://github.com/user/repo",  // optional source code link
//     featured: true,                             // whether to highlight this project
//     status: "completed",                        // "completed" | "in-progress" | "concept"
//     highlights: [                               // optional key achievements
//       "Built from scratch in two weeks",
//       "Handles 1,000+ concurrent users",
//     ],
//   }
//
// ============================================================================

export const projects: Project[] = [];
