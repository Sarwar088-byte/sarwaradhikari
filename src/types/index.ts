// ============================================================================
// Portfolio Type Definitions
// Complete TypeScript types for Sarwar Adhikari's portfolio website
// ============================================================================

/** Navigation item for the site header */
export interface NavItem {
  label: string;
  href: string;
}

/** Social media / external profile link */
export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

/** Education details */
export interface Education {
  degree: string;
  year: string;
  institution: string;
}

/** Language proficiency entry */
export interface Language {
  name: string;
  note: string;
}

/** Central site configuration */
export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  secondaryRole: string;
  tagline: string;
  description: string;
  fullBio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  siteUrl: string;
  avatar?: string;
  education: Education;
  availability: string | null;
  languages: Language[];
  interests: string[];
  navItems: NavItem[];
}

/** Skill category identifiers */
export type SkillCategoryId =
  | "programming"
  | "computer-science"
  | "software-database"
  | "complementary"
  | "tooling"
  | "mentorship";

/** Individual skill entry */
export interface Skill {
  name: string;
  category: SkillCategoryId;
  description: string;
  level: string;
  icon?: string;
}

/** Grouped skill category for display */
export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  description: string;
  skills: Skill[];
}

/** Technology tag used in projects */
export interface TechTag {
  name: string;
  color?: string;
}

/** Portfolio project */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: TechTag[];
  category: string;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "concept" | "Active" | "Completed";
  highlights?: string[];
}

/** Journey milestone type identifiers */
export type MilestoneType =
  | "current"
  | "role"
  | "foundation"
  | "learning"
  | "interest";

/** Journey / timeline milestone */
export interface JourneyMilestone {
  id: string;
  type: MilestoneType;
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
  icon?: string;
}

/** Animation variant names available in the motion config */
export type AnimationVariant =
  | "fadeUp"
  | "staggerChildren"
  | "textReveal"
  | "scaleIn"
  | "slideInLeft"
  | "slideInRight";

/** Motion configuration for animation timings and easings */
export interface MotionConfig {
  duration: {
    fast: number;
    normal: number;
    slow: number;
    verySlow: number;
  };
  ease: {
    default: [number, number, number, number];
    smooth: [number, number, number, number];
    bounce: [number, number, number, number];
    sharp: [number, number, number, number];
  };
  stagger: {
    fast: number;
    normal: number;
    slow: number;
  };
}
